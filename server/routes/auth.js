const express = require('express');
const router = express.Router();
const firebaseClient = require('../connections/firebase_client');
const firebaseAdminDb = require('../connections/firebase_admin');
const fireAuth = firebaseClient.auth();
const jwt = require('jsonwebtoken');

const tokenDbs = firebaseAdminDb.ref('tokens');
require('dotenv').config();

router.get('/success', function (req, res) {
    res.render('dashboard/success', {
        title: '註冊成功'
    });
});

router.get('/login', function (req, res) {
    let error = req.flash('error');
    if (req.session.uid) {
        res.redirect('/dashboard/archives');
    } else {
        res.render('dashboard/login', {
            title: '登入',
            error: error,
            hasInfo: error.length > 0
        });
    }
})


router.get('/signup', function (req, res) {
    let error = req.flash('error');
    if (req.session.uid) {
        res.render('dashboard/signup', {
            title: '註冊',
            error: error,
            hasInfo: error.length > 0,
        });
    } else {
        res.redirect('login');
    }
});


//post
router.post('/check', function (req, res) {
    let token = req.body.token;
    let decoded = jwt.verify(token, process.env.TOKEN_KEY);
    let success,
        timeNow = Math.floor(Date.now() / 1000),
        timeDiff = timeNow - decoded.tokenTime,
        tokenDay = Math.floor(timeDiff / 60 / 60 / 24);
    tokenDbs.orderByChild('token').equalTo(token).once('value').then(snapshot => {
        if (snapshot.val() !== null) {
            if (tokenDay > 3) {
                tokenDbs.child(decoded.tokenId).remove();
                success = false;
                return res.send({
                    success,
                    msg: '請重新登入'
                })
            } else {
                success = true;
                return res.send({
                    success,
                    msg: '可登入'
                });
            }
        } else {
            success = false;
            return res.send({
                success,
                msg: '無此token，無法登入'
            });
        }
    });
});
router.post('/login', function (req, res) {
    let email = req.body.email,
        password = req.body.password;
    fireAuth.signInWithEmailAndPassword(email, password)
        .then(function (result) {
            let data = {};
            data.uid = result.user.uid;
            tokenDbs.orderByChild('uid').equalTo(data.uid).once('value').then(function (snapshot) {
                if (snapshot.val() !== null) {
                    firebaseAdminDb.ref('tokens/' + data.uid).once('value').then(snapshot => {
                        return res.send({
                            token: snapshot.val().token,
                            success: true,
                            msg: '登入成功',
                        });
                    });
                } else {
                    let token = jwt.sign({
                        tokenId: result.user.uid,
                        tokenEmail: email,
                        tokenTime: Math.floor(Date.now() / 1000)
                    }, process.env.TOKEN_KEY);
                    data.token = token;
                    let dataJSON = JSON.parse(JSON.stringify(data));
                    firebaseAdminDb.ref('tokens/' + data.uid).set(dataJSON).then(() => {
                        res.send({
                            token,
                            success: true,
                            msg: '登入成功',
                        });
                    });
                }
            });

        })
        .catch(function (error) {
            let errorMsg = error.code;
            let msg;
            console.log(error);
            switch (errorMsg) {
                case 'auth/wrong-password':
                    msg = "登入失敗 : 密碼錯誤";
                    break;
                case 'auth/user-not-found':
                    msg = '登入失敗 : 無此用戶，請註冊新帳號';
            }
            console.log(msg);
            res.send({
                success: false,
                msg
            });
        });
});
router.post('/signout', function (req, res) {
    let token = req.body.token;
    let decoded = jwt.verify(token, process.env.TOKEN_KEY);
    let success,
        timeNow = Math.floor(Date.now() / 1000),
        timeDiff = timeNow - decoded.tokenTime,
        tokenDay = Math.floor(timeDiff / 60 / 60 / 24);
    tokenDbs.orderByChild('token').equalTo(token).once('value').then(snapshot => {
        if (snapshot.val() !== null) {
            if (tokenDay > 3) {
                tokenDbs.child(decoded.tokenId).remove();
                success = true;
                return res.send({
                    success,
                    msg: '已刪除Token，請重新登入'
                })
            } else {
                success = true;
                return res.send({
                    success,
                    msg: '無刪除Token，可再次登入'
                });
            }
        } else {
            success = true;
            return res.send({
                success,
                msg: '無此token，可重新登入'
            });
        }
    });
});
router.post('/signup', function (req, res) {
    let email = req.body.email,
        password = req.body.password,
        confirm_password = req.body.confirm_password,
        nickname = req.body.nickname;
    console.log(`email:${email}, password:${password},  confirm_password: ${confirm_password}, nickname: ${nickname}`);
    if (password === confirm_password) {
        fireAuth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                // console.log(result);
                console.log('Uid:' + result.user.uid);
                let saveUser = {
                    'email': email,
                    'nickname': nickname,
                    'uid': result.user.uid
                }
                firebaseAdminDb.ref('/users/' + result.user.uid).set(saveUser);
                res.redirect('success');
            })
            .catch(function (error) {
                let errorMsg = error.code;
                switch (errorMsg) {
                    case 'auth/weak-password':
                        req.flash('error', '註冊失敗:密碼最少須填寫6個字母');
                        break;
                    case 'auth/email-already-in-use':
                        req.flash('error', '註冊失敗:此信箱已被註冊過');
                        break;
                }
                res.redirect('signup');
            });
    } else {
        req.flash('error', '確認密碼不正確');
        res.redirect('signup');
    }
});


module.exports = router;