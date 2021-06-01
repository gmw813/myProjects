<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-06 16:56:26
 * @LastEditTime: 2021-05-07 09:33:32
-->
<template>
  <div class="parent_con">
    <span>this is parent.</span>
    <child-1 :msg='msg' @passData ="getPassData" test-attrs="$attrs"></child-1>
    <child-2></child-2>
  </div>
</template>

<script>
import child1 from './child1.vue';
import Child2 from './child2.vue';
export default {
  components: { child1, Child2 },
  data(){
    return {
      msg:'hello'
    }
  },
  methods:{
    getPassData(e){
      console.log(e)
    }
  }
}
</script>

<style>
.parent_con{
  display: flex;
  justify-content: space-around;
}
</style>