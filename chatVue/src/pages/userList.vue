<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 13:08:25
 * @LastEditTime: 2021-06-11 16:03:02
-->
<template>
  <div class="com_userList">
    <div
      class="user_item"
      v-for="(item, index) in userList"
      :key="index"
      @click="chooseUser(item)"
    >
      <img :src="item.userpic" />
      <span>{{ item.username }}</span>
      <span v-if="me.username == item.username">（我）</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList",
  data(){
    return{
      me:null,
      userList:[]
    }
  },
  created(){
    if(this.$route.params.me){
      try{
        this.me = JSON.parse(this.$route.params.me);
        this.userList = JSON.parse(this.$route.params.userList);
      }catch(error){
        console.log(error);
      }
    }else{
      try{
        this.me = JSON.parse(localStorage.me);
        this.userList = JSON.parse(localStorage.userList);
      }catch(error){
        console.log(error);
      }
    }
  },
  mounted(){
    //监听服务器online事件  前端接收新的userlist
    this.$socket.on("online", (data) => {
      //赋值用户列表  传给子组件
      this.userList = data.userList;
    });
  },
  methods:{
    chooseUser(data) {
      this.chatUser = data;
      this.$router.push({
        name: "chatUser",
        params: {
          me: JSON.stringify(this.me),
          chatUser: JSON.stringify(this.chatUser),
        },
      });
    },
  }
};
</script>

<style scoped lang="scss">
.user_item {
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    margin: 5px;
    border-radius: 50%;
  }
}
</style>
