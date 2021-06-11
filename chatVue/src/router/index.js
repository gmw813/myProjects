/*
 * @Descripttion:
 * @Author: GENGMENGWEI
 * @Date: 2021-06-11 14:11:06
 * @LastEditTime: 2021-06-11 16:21:22
 */
import { createRouter, createWebHistory } from "vue-router";
import chatUser from "@/pages/chatUser.vue";
import userList from "@/pages/userList.vue";
import login from "@/pages/login.vue";
const routes = [
  {
    path: "/",
    name:'login',
    component: login,
  },
  {
    path: "/chatUser",
    name:'chatUser',
    component: chatUser,
  },
  {
    path: "/userList",
    name:'userList',
    component: userList,
  },
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
export default router;
