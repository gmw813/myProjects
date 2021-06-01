/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-04 15:13:30
 * @LastEditTime: 2021-03-05 16:42:27
 */
import * as types from "../type";
const state = {
    index:0
}
const getters = {
    index: state => state.index
  };
const actions = {
    setIndex({ commit }, param) {
        commit(types.SET_INDEX, param);
    },
}
const mutations = {
    [types.SET_INDEX](state, param) {
        state.index = param;
    },
}
export default {
    state,
    actions,
    getters,
    mutations
};