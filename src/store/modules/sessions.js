import Vue from 'vue'
import Vuex from 'vuex'
import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  CREATE_SESSION,
  REMOVE_SESSION,
  SELECT_SESSION,
  SET_CURRENT_USER
} from '@/store/mutation-types'

Vue.use(Vuex)

const sessions = {
  state: {
    // 会话列表
    sessions: [],
    // 当前选中的会话ID
    currentSessionId: null,
    // 当前选中的会话
    currentSession: {}
  },
  getters: {
    // 过滤后的会话列表
    sessions: (state, filter) => {
      return state.sessions.filter(session => session.user.name.includes(filter))
    },
    // 当前会话
    currentSession: state => {
      return state.sessions.find(item => item.id === state.currentSessionId)
    },
    // 根据id查找会话
    getSession: (state, id) => {
      return state.sessions.find(item => item.id === id)
    }
  },
  mutations: {
    // 发送消息
    [SEND_MESSAGE] (state, content) {
      let session = state.currentSession
      session.messages.push({
        content: content,
        date: new Date(),
        self: true,
        isRead: true
      })
      let div = document.getElementById('message')
      div.scrollTop = div.scrollHeight
    },
    // 接收消息
    [RECEIVE_MESSAGE] (state, payload) {
      let session = payload.session
      let content = payload.message.content
      if (!content) {
        return false
      }
      let id = parseInt(session.id)
      let imSession = state.getSession(id)
      let isRead = (id === state.currentSessionId)
      if (isRead === true) {
        imSession.unReadAmount += 1
      }
      let message = payload.message
      message.self = false
      message.isRead = isRead
      imSession.messages.push(message)
      let div = document.getElementById('message')
      div.scrollTop = div.scrollHeight
    },
    // 增加会话
    [CREATE_SESSION] (state, session) {
      let id = parseInt(session.id)
      let imSession = state.getSession(id)
      if (imSession) {
        return false
      }
      state.sessions.push({
        id: id,
        user: session,
        unReadAmount: 0,
        messages: []
      })
      if (state.currentSessionId === 0) {
        state.currentSessionId = id
        state.currentSession = state.getSession(id)
      }
    },
    // 移除会话
    [REMOVE_SESSION] (state, id) {
    },
    // 选择会话
    [SELECT_SESSION] (state, id) {
      state.currentSessionId = id
      let imSession = state.getSession(id)
      imSession.unReadAmount = 0
      state.currentSession = imSession
    },
    // 设置用户信息
    [SET_CURRENT_USER] (state, user) {
      state.currentUser = user
    }
  }
}

export default sessions
