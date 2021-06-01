/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-03 16:05:37
 * @LastEditTime: 2021-05-06 16:29:52
 */
import { createStore } from 'vuex'
import common from "./modules/common";
export default createStore({
  //data
  state: {
    num:0
  },
  //计算属性  computed
  getters:{

  },
  //methods
  mutations: {
    addNum(state){
      state.num+=2;
    }
  },
  //异步方法  需要用到Ajax的时候 
  actions: {
  },
  //模块
  modules: {
    common
  }
  // commit 和dispatch的区别在于commit是提交mutatious的同步操作，dispatch是分发actions的异步操作

  // dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch(‘actions方法名’,值)
  
  // commit：同步操作，写法：this.$store.commit(‘mutations方法名’,值)
})
