/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-04-30 16:36:33
 * @LastEditTime: 2021-05-06 10:29:57
 */
import { createStore } from 'vuex'
import count from './modules/count'

export default createStore({
  modules: {
    count
  }
})
