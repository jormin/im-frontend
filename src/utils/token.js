import Cookies from 'js-cookie'

const tokenKey = process.env.TOKEN_KEY

/**
 * 获取Token
 * @returns {*}
 */
export function getToken () {
  return Cookies.get(tokenKey)
}

/**
 * 设置Token
 * @param token
 * @returns {*}
 */
export function setToken (token) {
  return Cookies.set(tokenKey, token)
}

/**
 * 移除Token
 * @returns {*}
 */
export function removeToken () {
  return Cookies.remove(tokenKey)
}
