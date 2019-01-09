import VueRouter from 'vue-router'
import Index from '@/views/index/index'
import Auth from '@/views/auth/index'
import Login from '@/views/auth/login'
import Register from '@/views/auth/register'
import Reset from '@/views/auth/reset'
import store from '@/store/index'

const routes = [
  {
    path: '/', component: Index, meta: {title: '聊天系统'}
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: 'login', component: Login, meta: {title: '登录'}
      },
      {
        path: 'register', component: Register, meta: {title: '注册'}
      },
      {
        path: 'reset', component: Reset, meta: {title: '找回密码'}
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const nextRoutes = ['/']
  let token = store.state.token
  if (nextRoutes.indexOf(to.path) >= 0) {
    if (token === undefined || !token) {
      return next('/auth/login')
    }
  }
  if (token && to.path === '/auth/login') {
    return next('/')
  }
  return next()
})

export default router
