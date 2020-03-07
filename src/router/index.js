import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const login = () => import('../pages/login')
const register = () => import('../pages/register')
const index = () => import('../pages/index')
const me = () => import('../pages/me')
const classify = () => import('../pages/classify')
const shopCart = () => import('../pages/shopCart')
const home = () => import('../pages/home')
const detail = () => import('../pages/detail')

export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'me',
          component: me
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'shopCart',
          component: shopCart
        }
      ]
    },
    {
      path: '/detail',
      component: detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
