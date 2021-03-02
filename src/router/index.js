import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('components/content/Layout.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('views/home/index.vue')
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('views/category/index.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('views/profile/index.vue')
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('views/goods/index.vue')
      }
    ]
  }
]

// 防止重复点击当前路由的BUG
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
