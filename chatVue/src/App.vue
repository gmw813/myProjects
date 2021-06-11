<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 13:08:25
 * @LastEditTime: 2021-06-11 16:01:07
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const socket = proxy.$socket;
    const router = useRouter();
    const route = useRoute();
    return {
      socket, // vue3获取全局变量的语法 此处return的内容可以在组件的其他部分使用  this.xxx
      router,
      route,
    };
  },
  name: "App",
  mounted() {
    //mock测试学习  前端模拟接口调用及返回数据
    this.$axios.get("/api/user").then((res) => {
      console.log(res);
    });
  },

});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
