/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-03 16:05:37
 * @LastEditTime: 2021-05-11 09:39:01
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      //自定义key | 关键词 ：值
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/parent/:id',
    name: 'Parent',
    props:true,  //路由组件传参  组件上使用props属性接收id  props:['id]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/parent.vue')
  },
  {
    path:'/news/:id/:name',
    name:'News',
    component:() => import('../views/news.vue'),
    //嵌套路由写法
    children:[
      {
        path:'child1',
        component:() => import('../components/child1.vue')
      },
      {
        path:'child2',
        component:() => import('../components/child2.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
// 导航守卫事件
router.beforeEach((to,from,next)=>{
  console.log(to,from);
  next()
})
export default router
