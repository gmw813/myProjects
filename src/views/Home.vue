<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-03 16:05:37
 * @LastEditTime: 2021-05-12 10:31:14
-->
<template>
  <div class="home">
    <div class="left">
      <chat-Item class="chatBox"></chat-Item>
      <msg-Box class="msgBox"></msg-Box>
    </div>
    <div class="right">
      <user-list class="userBox"  :userList="userList"></user-list>
    </div>
   <!-- <div>{{$store.state.num}}</div>
   <button @click="addStateNum">click</button>
   <i class="icon"/> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import modelItem from '@/components/v-model'
import slotItem from '@/components/slot'
import chatItem from '@/components/chat'
import userList from '@/components/userList'
import msgBox from '@/components/message'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    modelItem,
    slotItem,
    chatItem,
    userList,
    msgBox
  },
  data(){
    return{
      list:[],
      username:'11',
      userList:[
        {
          icon:'1',
          username:'一一'
        },
        {
          icon:'2',
          username:'二二'
        },
        {
          icon:'3',
          username:'三三'
        },
        {
          icon:'4',
          username:'四四'
        },
        {
          icon:'5',
          username:'五五'
        },
        {
          icon:'6',
          username:'六六'
        }
      ]
    }
  },
  mounted(){
  //get 请求接口
    // var _this=this;
    // _this.$api.get('/api')
    //   .then(res=> {
    //     console.log(res)
    //     if(res.code == 0){
    //       this.list = res.data
    //     }
    //   })
    //   .catch(error=>{
    //     console.log(error)
    //   })
  },
  methods:{
    addStateNum(){
      this.$store.commit('addNum')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/modules/variables.less';
@import '~@/assets/style/modules/mixin.less';
.home{
  .flex(); //使用less函数  无传参
  width: 700px;
  height: 500px;
  border: 1px solid @main-color;//使用less变量
  margin: 20px auto;
}
.icon{
  .icon(24px, 50px, url("~@/assets/images/1.png")); //使用less函数  有传参
}
.left{
  width: 500px;   
  height: 100%;
  border-right: 1px solid @main-color;
  .chatBox{                                                                                                                           
    height: 70%;
    border-bottom: 1px solid @main-color;
  }
  .msgBox{
    height: 30%;
  }
}
</style>
