/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 10:52:04
 * @LastEditTime: 2021-05-12 16:13:43
 */
var express = require('express');
var router = express.Router();
var User = require('../controller/UserController')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/getUserList', User.getUserList);
router.get('/login', User.login);
module.exports = router;
