<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-06-11 11:00:14
 * @LastEditTime: 2021-06-11 16:07:04
-->
<template>
  <div class="right">
    <div class="head_title">
      <span @click="back">返回</span>
      <span>{{ chatUser.username }}</span>
      <span></span>
    </div>
    <chat-box
      class="chatBox"
      ref="chat"
      :chatUser="chatUser"
      :me="me"
      :key="timer"
    />
    <send-box class="sendBox" ref="send" @sendMsg="sendMsg" />
  </div>
</template>

<script>
import chatBox from "@/components/chatBox.vue";
import sendBox from "@/components/sendBox.vue";
export default {
  name:'chatUser',
  components: {
    sendBox,
    chatBox,
  },
  data() {
    return {
      me: null,
      chatUser: null,
      timer: "",
    };
  },
  created() {
    try{
      this.me = JSON.parse(this.$route.params.me);
      this.chatUser = JSON.parse(this.$route.params.chatUser);
    }catch(error){
      console.log(error);
    }

  },
  mounted() {
    // 监听服务器的单聊消息
    this.$socket.on("receive", (data) => {
      console.log(data);
      this.addMsg(data);
    });
    //监听服务器群发消息事件
    this.$socket.on("chat message", (data) => {
      // console.log(data);
      // console.log(localStorage)
      this.addMsg(data);
    });
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    sendMsg(data) {
      this.$socket.emit("send", data);
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
.right {
  width: 100%;
  .head_title{
    display: flex;
    justify-content: space-between;
    background: lightgray;
    margin: 0;
    padding: 10px 0;
  }
  .chatBox {
    height: 70%;
    border-bottom: 1px solid #2333;
  }
  .sendBox {
    height: 30%;
  }
}
</style>
