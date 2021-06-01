<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 13:08:25
 * @LastEditTime: 2021-05-24 15:16:32
-->
<template>
  <div class="page_main">
    <div class="login" v-if="!isLogin">
      <div class="form-item">
        <span>用户名</span>
        <input type="text" v-model="username" />
      </div>
      <div class="form-item">
        <span>密码</span>
        <input type="password" v-model="password" />
      </div>
      <div class="form-item">
        <button @click="toLogin">登录</button>
      </div>
    </div>
    <div class="logined" v-if="isLogin">
      <div class="left">
        <userList
          class="userList"
          ref="list"
          :me="me"
          @chooseUser="chooseUser"
        />
      </div>
      <div class="right">
        <div class="chatuser">
          <h5>{{ chatUser.username }}</h5>
        </div>
        <chat-box
          class="chatBox"
          ref="chat"
          :chatUser="chatUser"
          :me="me"
          :key="timer"
        />
        <send-box class="sendBox" ref="send" @sendMsg="sendMsg"/>
      </div>
    </div>
  </div>
</template>

<script>
import userList from "./components/userList.vue";
import chatBox from "./components/chatBox.vue";
import sendBox from "./components/sendBox.vue";
import $axios from "axios";
import socket from "./socket";
export default {
  name: "App",
  components: {
    userList,
    sendBox,
    chatBox,
  },
  data() {
    return {
      isLogin: false,
      username: "",
      password: "",
      me: {},
      userList: [],
      chatUser: null,
      timer: "",
    };
  },
  created(){
    //mock测试学习  前端模拟接口调用及返回数据
    $axios.get('/api/user').then(res =>{
      console.log(res);
    })
  },
  methods: {
    chooseUser(data) {
      this.chatUser = data;
      console.log(this.chatUser,5555555555)
    },
    toLogin() {
      $axios
        .get("http://localhost:3000/users/login", {
          params: { username: this.username, password: this.password },
        })
        .then((res) => {
          // console.log(res);
          if (res.data.length) {
            this.me = res.data[0];
            this.chatUser = this.me;
            //登陆成功
            this.isLogin = true;
            //向服务器发送登录者信息  以在数据库表中插入socketid
            socket.emit("login", res.data[0]);
            //监听服务器login事件  前端接收socketid
            socket.on("login", (data) => {
              this.me["socketid"] = data.socketid;
              console.log(this.me);
              //赋值用户列表  传给子组件
              this.$refs.list.changeList(data.userList);
            });
            //监听服务器online事件  前端接收新的userlist
            socket.on("online", (data) => {
              console.log(2222222222,data);
              //赋值用户列表  传给子组件
              this.$refs.list.changeList(data.userList);
            });
            // 监听服务器的单聊消息
            socket.on("receive", (data) => {
              console.log(data);
              this.addMsg(data);
            });
            //监听服务器群发消息事件
            socket.on("chat message", (data) => {
              // console.log(data);
              // console.log(localStorage)
              this.addMsg(data);
            });
          } else {
            alert("用户不存在或信息有误");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendMsg(data) {
      socket.emit("send", data);
      this.addMsg(data);
    },
    addMsg(data) {
      if (localStorage.msgList) {
        let msgList;
        try {
          if (localStorage.msgList.indexOf(JSON.stringify(data)) == -1) {
            msgList = JSON.parse(localStorage.msgList);
            msgList.push(data);
            localStorage.msgList = JSON.stringify(msgList);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        let msgArr = [];
        msgArr.push(data);
        localStorage.msgList = JSON.stringify(msgArr);
      }
      this.timer = new Date().getTime(); //加时间戳，否则不刷新
      this.$refs.chat.refresh();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background: skyblue;
  .form-item {
    display: flex;
    flex-direction: row;
    margin: 10px;
    span {
      width: 30%;
    }
    button {
      width: 100px;
      margin: 20px auto;
    }
  }
}
.logined {
  display: flex;
  width: 700px;
  height: 500px;
  border: 1px solid #2333;
  .left {
    width: 200px;
    border-right: 1px solid #2333;
    .userList {
      width: 200px;
      height: 100%;
      overflow: auto;
    }
  }
  .right {
    width: 500px;
    .chatBox {
      height: 70%;
      border-bottom: 1px solid #2333;
      overflow: auto;
    }
    .sendBox {
      height: 30%;
    }
  }
}
h5 {
  background: lightgray;
  margin: 0;
  padding: 10px;
}
</style>
