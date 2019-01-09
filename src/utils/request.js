import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'

const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const router = new VueRouter()

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Auth-Token'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  response => {
    let res = response.data
    let code = res.code
    switch (code) {
      case 0:
      case -1:
        Vue.prototype.$message({
          message: res.message,
          type: 'error'
        })
        break
      case -2:
        localStorage.removeItem('token')
        router.push('/login')
        location.reload()
        break
      default:
        return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
