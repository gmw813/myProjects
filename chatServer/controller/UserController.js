/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 14:38:14
 * @LastEditTime: 2021-05-12 16:21:40
 */
const dbconfig = require('../utils/dbconfig');
//获取用户列表
let getUserList = async (req, res, next)=>{
    res.append('Access-Control-Allow-Origin','*');
    res.append('Access-Control-Allow-Content-type','*')
    let sql = 'select * from user ';
    let sqlArr = [];
    let result = await dbconfig.SySqlConnect(sql,sqlArr);
    if(result.length){
        res.send(result);
    }else{
        //用户表中不存在，去注册
        res.send([]);
    }
}
let login = async (req, res, next)=>{
    res.append('Access-Control-Allow-Origin','*');
    res.append('Access-Control-Allow-Content-type','*')
    let sql = 'select * from user where username = ? and password = ?';
    let sqlArr = [req.query.username,req.query.password];
    let result = await dbconfig.SySqlConnect(sql,sqlArr);
    if(result.length){
        res.send(result);
    }else{
        //用户表中不存在，去注册
        res.send([]);
    }
}
module.exports = {
    getUserList,
    login
}