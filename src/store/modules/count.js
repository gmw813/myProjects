/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-06 10:13:29
 * @LastEditTime: 2021-05-06 15:08:53
 */
// import { types } from 'node-sass';
import * as types from '../type.js'

const modules = {
    // namespaced:true,
    state: {
        num:0,
        list:[]
      },
      // 计算属性
      getters:{
        num:(state)=>state.num,
        sum:(state)=>state.num+100,
        list:(state)=>state.list
      },
      //  同步方法  不允许Ajax操作 commit触发同步事件
      mutations: {
        addNum(state,step){
          state.num+=step;
        },
        setList(state,data){
          state.list = data
        }
      },
      // 异步方法  允许Ajax操作 dispatch触发异步事件
      actions: {
        //引入参数时需要用括号  {state} || {state,commit}
        [types.CHANGE_NUM]({ state , commit},{msg}){
          console.log(msg)
          state.num +=20; //可以直接修改state的值
          commit('addNum',5); // 也可以通过触发mutations修改state的值
        },
        [types.GET_LIST]({commit}){
          let httpUrl = 'https://api.apiopen.top/getJoke?page=1&count=10&type=text'
          fetch(httpUrl).then(res=>res.json()).then(res=>{
            console.log(res);
            commit('setList',res.result)
          })
        }
      },
}
export default modules;
