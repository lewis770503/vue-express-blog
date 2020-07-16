const express = require('express');
const router = express.Router();
const stringtags = require('striptags');
const momont = require('moment');
const convertPagination = require('../modules/convertPagination');
const firebaseAdminDb = require('../connections/firebase_admin');
const jwt = require('jsonwebtoken');

const user = firebaseAdminDb.ref('users');
const categoriesRef = firebaseAdminDb.ref('categories');
const articlesRef = firebaseAdminDb.ref('articles');

//get
router.get('/article/create', function (req, res) {
    categoriesRef.once('value', function (snapshot) {
        const categories = snapshot.val();
        res.send({
            categories,
            success: true
        });
    });
});

router.get('/article/:id', function (req, res) {
    const id = req.params.id;
    // console.log(id);
    let categories = {};
    categoriesRef.once('value').then(function (snapshot) {
        categories = snapshot.val();
        return articlesRef.child(id).once('value');
    }).then(function (snapshot) {
        const article = snapshot.val();
        // console.log(article);
        if (article === null) {
            return res.send({
                msg: '無此文章',
                success: false
            })
        }
        res.send({
            categories,
            article,
            success: true
        });
    });
});

router.get('/archives', function (req, res, next) {
    const status = req.query.status || 'public';
    let currentPage = Number.parseInt(req.query.page) || 1; //目前頁數
    let categories = {};
    categoriesRef.once('value').then(function (snapshot) {
        categories = snapshot.val();
        return articlesRef.orderByChild('update_time').once('value');
    }).then(function (snapshot) {
        const articles = [];
        snapshot.forEach(function (snapshotChild) {
            if (status === snapshotChild.val().status) {
                articles.push(snapshotChild.val());
            }
        });
        articles.reverse();
        //分頁
        const pageData = convertPagination(articles, currentPage);
        //分頁 end
        res.send({
            articles: pageData.pageData,
            categories,
            status,
            page: pageData.page
        });
    }).catch(error => {
        res.send({
            error: error.message,
        })
    });
});

router.get('/categories', function (req, res, next) {
    categoriesRef.once('value', function (snapshot) {
        const category = snapshot.val();
        res.send({
            category
        });
    });
});


//post

router.post('/article/create', function (req, res) {
    let token = req.body.data.token;
    let decoded = jwt.verify(token, process.env.TOKEN_KEY);
    let uid = decoded.tokenId;
    user.child(uid).once('value').then(function (snapshot) {
            let nickname = snapshot.val().nickname;
            const data = req.body.data;
            const articleRef = articlesRef.push();
            const key = articleRef.key;
            const updateTime = Math.floor(Date.now() / 1000);
            data.id = key;
            data.user = nickname;
            data.update_time = updateTime;
            let dataJSON = JSON.parse(JSON.stringify(data));
            articleRef.set(dataJSON).then(function () {
                res.send({
                    msg: '已成功新增',
                    success: true,
                    articleId: data.id
                });
            });
        })
        .catch(error => {
            console.log(error.message);

        });
});

router.post('/article/update/:id', function (req, res) {
    const data = req.body.data;
    const id = req.params.id;
    const updateTime = Math.floor(Date.now() / 1000);
    data.update_time = updateTime;
    let dataJSON = JSON.parse(JSON.stringify(data));
    articlesRef.child(id).update(dataJSON).then(function () {
            res.send({
                msg: '已成功新增',
                success: true,
                articleId: id
            });
        })
        .catch(error => {
            console.log(error.message);

        });
});

router.post('/article/delete/:id', function (req, res) {
    const id = req.params.id;
    articlesRef.child(id).remove();
    res.send({
        msg: '文章已刪除',
        success: true
    })
});

router.post('/categories/create', function (req, res) {
    let data = req.body.data;
    console.log(req.body);
    const categoryRef = categoriesRef.push();
    const key = categoryRef.key;
    data.id = key;
    categoriesRef.orderByChild('path').equalTo(data.path).once('value').then(function (snapshot) {
        if (snapshot.val() !== null) {
            res.send({
                msg: '已有相同路徑',
                success: false
            });
        } else if (data.name === '' || data.path === '') {
            res.send({
                msg: '欄位不能為空，請輸入分類名稱與路徑',
                success: false
            });
        } else {
            let dataJSON = JSON.parse(JSON.stringify(data));
            console.log(dataJSON);
            categoryRef.set(dataJSON).then(function () {
                res.send({
                    msg: '新增成功',
                    success: true,
                })
            });
        }
    });
});

router.post('/categories/delete/:id', function (req, res, next) {
    const id = req.params.id;
    let cotegories_num = 0;
    articlesRef.orderByChild('category').equalTo(id).once('value').then(function (snapshot) {
        snapshot.forEach(function (snapshotChild) {
            if (id === snapshotChild.val().category) {
                cotegories_num++;
            };
        });
        if (cotegories_num > 0) {
            res.send({
                msg: `此分類有${cotegories_num}則文章無法刪除`,
                success: false
            });
        } else {
            categoriesRef.child(id).remove();
            res.send({
                msg: '分類已刪除',
                success: true
            })
        }
    });
});



module.exports = router;