var express = require('express');
var router = express.Router();
const convertPagination = require('../modules/convertPagination');
const firebaseAdminDb = require('../connections/firebase_admin');

const categoriesRef = firebaseAdminDb.ref('categories');
const articlesRef = firebaseAdminDb.ref('articles');

/* GET home page. */
router.get('/', (req, res, next) => {
  let currentPage = Number.parseInt(req.query.page) || 1, //目前頁數
    categories = {};
  const status = req.query.status || 'public';
  const page_category = req.query.category || 'all';;
  // console.log('status: ' + status + '/page_category: ' + page_category);

  categoriesRef.once('value').then(function (snapshot) {
    categories = snapshot.val();
    let i;
    snapshot.forEach(function (snapshotChild) {
      if (page_category === snapshotChild.val().id || page_category === 'all') {
        return i = 1;
      } else {
        i = 0;
      }
    });
    if (i === 1) {
      return articlesRef.orderByChild('update_time').once('value');
    } else {
      var err = new Error('Not Found');
      err.status = 500;
      return res.send({
        message: err.message,
        error: err,
        title: '找不到此分類'
      })
    }
  }).then(function (snapshot) {
    let articles = [];
    snapshot.forEach(function (snapshotChild) {
      if (status === snapshotChild.val().status) {
        if (page_category === snapshotChild.val().category) {
          articles.push(snapshotChild.val());
        } else if (page_category === 'all') {
          articles.push(snapshotChild.val());
        }
      }
    });
    articles.reverse();
    //分頁
    const pageData = convertPagination(articles, currentPage);
    //分頁 end
    res.send({
      categories,
      articles: pageData.pageData,
      page: pageData.page,
      status: false,
      page_category
    });
  });
});

router.get('/post/:id', function (req, res, next) {
  const id = req.params.id;
  let categories = {};
  categoriesRef.once('value').then(function (snapshot) {
    categories = snapshot.val();
    return articlesRef.child(id).once('value');
  }).then(function (snapshot) {
    const article = snapshot.val();
    if (!article) {
      var err = new Error('Not Found');
      err.status = 500;
      return res.send({
        message: err.message,
        error: err,
        title: '找不到文章'
      })
    }
    res.send({
      categories,
      article
    });
  });
});


module.exports = router;