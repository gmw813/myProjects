/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-01 17:00:10
 * @LastEditTime: 2021-05-12 14:04:50
 */
var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//改写
var http = require('http');
var server  = http.createServer(app);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态资源
app.use(express.static(path.join(__dirname, 'public')));
//post请求
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

server.listen('3000');