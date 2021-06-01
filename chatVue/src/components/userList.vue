<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 13:08:25
 * @LastEditTime: 2021-05-20 10:56:11
-->
<template>
  <div class="com_userList">
    <div
      class="user_item"
      v-for="(item, index) in userList"
      :key="index"
      @click="$emit('chooseUser', item)"
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
  props: ['me'],
  data(){
    return{
      userList:[]
    }
  },
  watch:{
    userList:{
      handler:function(val){
        console.log(val);
        return val;
      },
      deep:true
    }
  },
  methods:{
    changeList(){
      this.$nextTick(()=>{
        this.userList = this.$parent.userList;
      })
    }
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
