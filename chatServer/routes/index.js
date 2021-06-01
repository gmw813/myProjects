/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 10:52:04
 * @LastEditTime: 2021-05-13 10:38:52
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
