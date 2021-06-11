/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 13:08:25
 * @LastEditTime: 2021-06-11 14:12:54
 */
import { createApp } from "vue";
import App from "./App.vue";
import store from './store'
import router from './router'
import axios from 'axios';
import socket from "./socket";
import '@/api/mock';
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$socket = socket;
app.use(store).use(router).mount("#app");

