<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-04-06 16:36:24
 * @LastEditTime: 2021-05-11 14:54:52
-->
<template>
  <div class='userlist'>
    用户列表
      <ul>
        <li v-for="(item,index) in userList" :key="index">
            <img :src="require(`@/assets/images/${item.icon}.png`)">
            <span>{{item.username}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'userlist',
  props:['userList'],
  data(){
    return {
      // icon:require('../assets/images/2.png')
      icon:"../assets/images/2.png"
    }
  },
  components: {},
  created(){},
  mounted(){
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.userlist{
  ul li{
    list-style-type: none;
  }
  img , image{
    width: 50px;
    height: 50px;
  }
}
</style>
