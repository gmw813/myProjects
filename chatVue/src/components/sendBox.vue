<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 15:09:46
 * @LastEditTime: 2021-05-20 10:08:21
-->
<template>
  <div class="com_send">
    <input type="text" v-model="sendMsg" />
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sendMsg: "",
    };
  },
  methods: {
    send() {
      //发送消息
      let obj = {
        from: this.$parent.me,
        to: this.$parent.chatUser,
        msg: this.sendMsg,
      };
      console.log(obj)
      this.$emit('sendMsg', obj);
      this.sendMsg = "";
    },
  },
};
</script>

<style>
.com_send input {
  width: 98%;
  height: 80px;
  outline: none;
  border: none;
}
</style>
