import request from '@/utils/request'

/**
 * 登录
 * @param params
 * @returns {*}
 */
export function login (params) {
  return request.request({
    url: '/auth/login',
    method: 'post',
    data: params
  })
}

/**
 * 注册
 * @param params
 * @returns {*}
 */
export function register (params) {
  return request.request({
    url: '/auth/register',
    method: 'post',
    data: params
  })
}

/**
 * 发送验证码
 * @param params
 * @returns {*}
 */
export function sendCode (params) {
  return request.request({
    url: '/auth/sendCode',
    method: 'post',
    data: params
  })
}

/**
 * 重置密码
 * @param params
 * @returns {*}
 */
export function reset (params) {
  return request.request({
    url: '/auth/reset',
    method: 'post',
    data: params
  })
}

/**
 * 获取用户信息
 * @returns {*}
 */
export function getUserInfo () {
  return request.request({
    url: '/auth/user-info',
    method: 'get'
  })
}
