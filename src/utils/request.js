import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {getToken} from '@/utils/token'

const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

const router = new VueRouter()

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Auth-Token'] = token
    }
    config.data = qs.stringify(config.data)
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
    switch (response.status) {
      case 200:
        let res = response.data
        let code = res.code
        switch (code) {
          case 0:
          case -1:
            Vue.prototype.$message({
              message: res.message,
              type: code === 0 ? 'success' : 'error'
            })
            return res
          case -2:
            localStorage.removeItem('token')
            router.push('/login')
            location.reload()
            break
          default:
            return res
        }
        break
      case 403:
        localStorage.removeItem('token')
        router.push('/login')
        location.reload()
        break
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
