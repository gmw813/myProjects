/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-12 13:08:25
 * @LastEditTime: 2021-05-24 11:02:30
 */
import { createApp } from "vue";
import App from "./App.vue";
import axios from 'axios';
import '@/api/mock';
createApp(App).$axios = axios;
createApp(App).mount("#app");
