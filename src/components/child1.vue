<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-06 16:56:42
 * @LastEditTime: 2021-05-07 09:37:23
-->
<template>
  <div class="child1-con">
      this is child1.{{msg}}
      <child1-Item></child1-Item>
  </div>
</template>

<script>
import child1Item from './child1_child.vue';
export default {
  inheritAttrs: true,
  components: { child1Item },
    props:['msg'],
    mounted(){
        setTimeout(() => {
            console.log(this.$attrs)
            this.$emit('passData','this is child1.data')
        }, 2000);
    }
}
</script>

<style>

</style>