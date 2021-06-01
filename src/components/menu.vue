<template>
    <div class="container">
        <div class="index">
            <button @click="isActive = !isActive">侧边栏</button>
               <!-- 过渡动画 -->
              <button @click="isShow = !isShow">切换按钮</button>
               <transition name="slide">
                   <!-- todo  只有淡出动画，进入动画无效 -->
                <div v-if="isShow" class="changediv"></div>
                </transition>
        </div>
        <div class="rMenu" :class="{active:isActive}"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:true,
            isActive:false
        }
    },
    methods:{
        changeShow(){
            this.isShow = !this.isShow
        },
        toggleMenu(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 2s ease;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  transform: translateX(500px);
  /* opacity: 0; */
}
.index{
    width: 100vw;
    height: 100vh;
    background-color: #8d8d8d;
    position: fixed;
    top: 0;
    left: 0;
}
.rMenu{
    width: 50vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: skyblue;
    transform: translateX(100vw);
    transition: ease-in-out 0.5s;
}
.active{
    transform: translateX(50vw);
}
.changediv{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>