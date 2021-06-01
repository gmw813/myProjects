/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 16:53:24
 * @LastEditTime: 2021-05-20 10:23:32
 */
const { json } = require('express');
const dbconfig = require('../utils/dbconfig');
let socketio = {}

function getSocket(server){
    socketio.io = require('socket.io')(server,{cors:{origin:'*'}});
    socketio.io.on('connection', (socket) => {
    socket.on('login',async (info)=>{
      //更新数据库表中该用户的socketid  和 socketid创建时间
      let sql1 = 'UPDATE user SET socketid = ? , create_time = ? WHERE username = ? ';
      let sqlArr1 = [socket.id,new Date(),info.username];
      dbconfig.SySqlConnect(sql1,sqlArr1);

      let sql2 = 'select * from user ';
      let sqlArr2 = [];
      let result = await dbconfig.SySqlConnect(sql2,sqlArr2);
      //向客户端发送此次连接的socketid
      socket.emit('login',{socketid:socket.id,userList:result});
      // 广播给所有人
      socketio.io.emit('online', {userList:result});
      console.log(socket.id+info.username+'  connected');
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