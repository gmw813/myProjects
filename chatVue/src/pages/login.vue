<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-06-11 16:16:48
 * @LastEditTime: 2021-06-11 16:29:30
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      username: "",
      password: "",
      me: {},
      userList: [],
      chatUser: null,
    };
  },
  methods: {
    toLogin() {
      // login参数
      let params = { username: this.username, password: this.password };

      //向服务器发送登录者信息  以在数据库表中插入socketid
      this.$socket.emit("login", params);
      //监听服务器login事件  前端接收socketid
      this.$socket.on("login", (data) => {
        if (data) {
          let params = {
            me: JSON.stringify(data.me),
            //赋值用户列表  传给子组件
            userList: JSON.stringify(data.userList),
          };
          this.$router.push({
            name: "userList",
            params: params,
          });
          localStorage.me = params.me;
          localStorage.userList = params.userList;
          //登陆成功
          this.isLogin = true;
        } else {
          //登陆失败
          alert("用户不存在或密码错误");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
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
</style>
