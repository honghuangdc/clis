import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '../views/firstPage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',  //路由模式：可选params hash(url多了#) / history(生产环境时，服务器端需配置)
  base: __dirname,
  routes: [
    {
      path: '/first-page',
      alias: '/',
      component: FirstPage
    },
    {
      path: '/second-page',
      component: () => import(/* webpackChunkName: "second-demo" */ '../views/secondPage.vue')  //路由懒加载
    }
  ],

  //滚动条行为，页面切换后滚动条回顶部
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router