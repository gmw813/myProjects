/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-03 16:05:37
 * @LastEditTime: 2021-03-04 16:06:56
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api/http";

const app = createApp(App);
app.config.globalProperties.$api = api;

app.use(store).use(router).mount('#app')
