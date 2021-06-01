/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 10:52:04
 * @LastEditTime: 2021-05-13 11:19:29
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//改写
var http = require('http');
var server  = http.createServer(app);
var io = require('./utils/socketio');
io.getSocket(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.header("Access-Control-Allow-Origin", "*"); //The ionic server
  res.header("Access-Control-Allow-Content-Type", "*"); //The ionic server
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 监听3000端口
server.listen(3000, () => {
  console.log('listening on *:3000')
})
// module.exports = app;
