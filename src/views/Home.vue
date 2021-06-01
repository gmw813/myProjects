<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-04-30 16:36:33
 * @LastEditTime: 2021-05-06 15:56:39
-->
<template>
  <div class="home">
    <h1>{{$store.state.count.num}}</h1>
    <h1>{{num}}</h1>
    <h2>{{sum}}</h2>
    <button @click="onClick(1)">mutationEvent1</button>
    <button @click="changeClick">mutationEvent2</button>
    <!-- 在methods中触发action -->
    <button @click="getList">actionEvent1</button>
    <!-- 直接绑定触发action -->
     <button @click="GET_LIST">actionEvent2</button>
    <!-- <ul v-for="(item,index) in list" :key="index">
      <li>{{index+1}}:{{item.text}}</li>
    </ul> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters,mapMutations,mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      msg:'vuex vuex'
    }
  },
  computed:{
    ...mapState({
      // num(state){   //需要使用当前组件this做运算时写成正常函数形式 箭头函数的this指向不对
      //   return state.count.num +this.msg;  //使用模块内的state值需要加上模块名
      // },
      num:state=>state.count.num,
      list:state=>state.count.list
    }),
    // getters 只能取值不能再次处理值？ 不能使用函数形式赋值？
    ...mapGetters(['sum'])
  },
  methods:{
    //mutations
    //原函数名
    ...mapMutations(['addNum']), //直接使用原函数名

    //别名
    // ...mapMutations({
    //   clickEvent:'addNum' //映射到this.clickEvent
    // }),

    //actions
    //原函数名
    // ...mapActions(['CHANGE_NUM']),

    //别名
    ...mapActions({
      changeEvent:'CHANGE_NUM', //映射到this.clickEvent
      GET_LIST:'GET_LIST'
    }),
    onClick(n){
      //1. 直接调用
      // this.$store.commit('addNum',1);

      //2. 原函数名
      this.addNum(1)
      
      //3. 别名
      // this.clickEvent(n)
    },
    changeClick(){
      //带参数时需要使用{}
      // this.$store.dispatch('CHANGE_NUM',{msg : this.msg})

      //原函数名
      // this.CHANGE_NUM({msg : this.msg});

      //别名
      this.changeEvent({msg : this.msg});
    },
    getList(){
      this.$store.dispatch('GET_LIST');
    }
  }
}
</script>
<style scoped>
ul{
  text-align: left;
}
</style>
