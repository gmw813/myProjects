<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-03 16:05:37
 * @LastEditTime: 2021-03-05 16:57:09
-->
<template>
  <div class="hello">
    <view class="list-top" @click="hidden()">
        <view class="title">{{title}}</view>
        <img src="../assets/images/course-down.png" alt="" width="10" height="10" :class="isHidden?'down':''">
    </view>
       <view class="content" v-if="!isHidden">{{content}}</view>
	   <div>
		   {{fullname}}
	   </div>
     <div>{{word.split("").reverse().join("")}}</div>
     <ul>
       <li v-for="item,index in oddnums" :key="index">
          <h3>{{item.num}}</h3>
       </li>
     </ul>
	 <div :class="{active:isActive}"></div>
   <!-- .stop阻止事件冒泡，否则 clickparent  clickevent 都会触发 -->
   <div class="btnparent"  @click="clickParent">
     <button @click.stop="clickEvent">按钮</button>
   </div>

   <!-- 表单输入绑定 双向绑定-->
   <div id="app">

     <!-- 输入框绑定 -->
     <input type="text" v-model="username">
     <h3>{{username}}</h3>

    <!-- 复选框绑定 -->
    <span v-for="(item,index) in fruits" :key="index" >
      {{item}}
      <input type="checkbox" v-model="checked" :value="item">
    </span>
    <h2>{{checked}}</h2>

     <!-- 单选框绑定 -->
    <span v-for="(item,index) in fruits" :key="index" >
      {{item}}
      <input type="radio" v-model="radiochecked" :value="item">
    </span>
    <h2>{{radiochecked}}</h2>

    <!-- 下拉选择框 -->
    <select name="select" id="" v-model="selected" >
      <option value="" disabled>请选择</option>
      <option v-for="(item,index) in fruits" :key="index"  :value="item">{{item}}</option>
    </select>
    <h2>{{selected}}</h2>

    <!-- 下拉复选框 按住ctrl复选 -->
    <select name="select" id="" v-model="mutiselected" multiple="multiple">
      <option v-for="(item,index) in fruits" :key="index"  :value="item">{{item}}</option>
    </select>
    <h2>{{mutiselected}}</h2>

    <!-- 绑定值一般返回字符串  使用number修饰符修改 -->
    <h2>未转换</h2>
    <input type="text" name="age" v-model="age" >
    <h3>{{age}}----{{typeof age}}</h3>

    <h2>转换后</h2>
    <input type="text" name="age" v-model.number="age" >
    <h3>{{age}}----{{typeof age}}</h3>

   </div>

   <!-- 过渡动画 -->
   <!-- <div v-if="isShow" class="changediv"></div> -->
   <button @click="changeShow">切换按钮</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    content:String,
    id:Number
  },
  data(){
    return {
      isShow:true,
      age:'',
    fruits:['苹果','香蕉','梨'],
    checked:[],
    selected:'',
    mutiselected:[],
    radiochecked:'',
    username:'姓名',
		isActive:true,
    isHidden:false,
	  firstname:'张',
	  lastname:'三',
    word:'music',
    nums:[
      {
        id:1,
        num:1
      },
      {
        id:2,
        num:2
      },
      {
        id:3,
        num:3
      },
      {
        id:4,
        num:4
      }
    ]
    }
  },
  computed:{
    ...mapGetters(["index"]),
    changeShow(){
      console.log(111,this.isShow)
      this.isShow = !this.isShow
      console.log(222,this.isShow)
    },
    clickParent(){
      console.log('clickParent')
    },
    clickEvent(){
      console.log('clickEvent')
    },
	  fullname:function(){
		  return  this.firstname + this.lastname
	  },
    oddnums:function(){
      return this.nums.filter((item)=>{
        return item.num%2 == 0
      })
    }
  },
  methods:{
    ...mapActions(["setIndex"]),
    hidden(){
      this.isHidden = !this.isHidden;
      if(!this.isHidden){
        this.setIndex(this.id)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active{
	width: 200px;
	height: 200px;
	background-color: skyblue;
}
.list-top{
  display: flex;
  justify-content: space-between;
  border: 1px solid #233;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
  display: inline-block;
  margin: 0 10px;
}
}
.down{
  transform: rotate(-90deg);
}
.changediv{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
