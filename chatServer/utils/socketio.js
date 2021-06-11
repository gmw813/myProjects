/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 16:53:24
 * @LastEditTime: 2021-06-11 16:45:35
 */
const { json } = require('express');
const dbconfig = require('../utils/dbconfig');
let socketio = {}

function getSocket(server){
    socketio.io = require('socket.io')(server,{cors:{origin:'*'}});
    socketio.io.on('connection', (socket) => {
    socket.on('login',async (info)=>{
      console.log(info);
      let sql = 'select * from user where username = ? and password = ?';
      let sqlArr = [info.username,info.password];
      let result = await dbconfig.SySqlConnect(sql,sqlArr);
      if(result.length){
        result[0].socketid = socket.id;
        //更新数据库表中该用户的socketid  和 socketid创建时间
        let sql1 = 'UPDATE user SET socketid = ? , create_time = ? WHERE username = ? ';
        let sqlArr1 = [socket.id,new Date(),info.username];
        await dbconfig.SySqlConnect(sql1,sqlArr1);

        let sql2 = 'select * from user ';
        let sqlArr2 = [];
        let result2 = await dbconfig.SySqlConnect(sql2,sqlArr2);
        //向客户端发送此次连接的
        socket.emit('login',{me:result[0],userList:result2});
        // 广播给所有人
        socketio.io.emit('online', {userList:result2});
        console.log(socket.id+info.username+'  connected');
      }else{
          //用户表中不存在，去注册
          //向客户端发送错误信息
          socket.emit('login',null);
          console.log('用户名或密码错误！');
      }

    })
    socket.on('getMsgList',() =>{
      
    })
    //响应某用户发送消息
    socket.on('send',(content) => {
      console.log(content);
      // socket.emit('receive','这是服务器的回复消息');
      //单聊功能  发送给接收的人
      socket.to(content.to.socketid).emit('receive',content);
    })  
    socket.on('disconnect', () => {
      console.log(socket.id+' disconnected')
    })
  })
}
socketio.getSocket = getSocket;
module.exports =  socketio;