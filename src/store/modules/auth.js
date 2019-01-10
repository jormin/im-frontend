import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_AUTH_TOKEN,
  SET_USER_INFO
} from '@/store/mutation-types'
import {login} from '@/api/auth'
import {setToken} from '@/utils/token'

Vue.use(Vuex)

const auth = {
  state: {
    // 当前用户token
    token: '',
    // 当前用户信息
    currentUser: {
      id: '',
      nickname: '',
      phone: '',
      gender: '',
      avatar: ''
    }
  },
  getters: {
    // 获取Token
    getToken: (state) => {
      return state.token
    },
    // 获取用户信息
    getUserInfo: (state) => {
      return state.currentUser
    }
  },
  mutations: {
    // 设置认证Token
    [SET_AUTH_TOKEN]: (state, token) => {
      state.token = token
    },
    // 设置当前用户
    [SET_USER_INFO]: (state, userInfo) => {
      state.currentUser = userInfo
    }
  },
  actions: {
    Login: ({commit}, params) => {
      return new Promise((resolve, reject) => {
        login(params).then(response => {
          let user = response.data.user
          let token = user.token
          commit('SET_USER_INFO', user)
          commit('SET_AUTH_TOKEN', token)
          setToken(token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default auth
