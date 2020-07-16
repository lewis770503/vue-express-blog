const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

//middlewar
app.use(bodyParser.json());
app.use(cors());

//router
const indexRouter = require('./routes/index');
const dashBoard = require('./routes/dashboard');
const auth = require('./routes/auth');


app.use('/api', indexRouter);
app.use('/api/dashboard', dashBoard);
app.use('/api/auth', auth);

app.use(express.static(path.join(__dirname, '/public')));

// //handle production
// if(process.env.NODE_ENV === 'production'){
//     //Static folder
//     app.use(express.static(__dirname + '/public/'));
//     //Handle SPA
//     app.get(/.*/,(req,res) => {
//         res.sendFile(__dirname + '/public/index.html');
//     })
// }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  let title = '';
  // render the error page
  if (err.status == 404) {
    title = '你所查看的頁面並不存在'
  } else {
    title = '程式錯誤'
  }
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err,
    title: title
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server ${port}`));