<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-07 14:14:31
 * @LastEditTime: 2021-05-11 09:55:15
-->
<template>
  新闻页面--动态路由{{$route.params.id}}{{$route.params.name}}
  <!-- 作为嵌套子路由的显示容器 -->
  <router-view></router-view>
</template>

<script>
export default {
  mounted(){
    //在此处根据路由携参做请求操作
  }
}
</script>

<style>

</style>