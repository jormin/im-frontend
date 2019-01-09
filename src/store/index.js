import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import auth from './modules/auth'
import friends from './modules/friends'
import sessions from './modules/sessions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentUser: {
      id: '',
      name: '',
      gender: '',
      avatar: ''
    },
    // 会话列表
    sessions: [],
    // 当前选中的会话ID
    currentSessionId: null,
    // 当前选中的会话
    currentSession: {},
    modules: {
      auth,
      friends,
      sessions
    }
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})

// 监听
store.watch(
  (state) => state.sessions,
  (val) => {
    localStorage.setItem('vue-chat-session', JSON.stringify(val))
  },
  {
    deep: true
  }
)

export default store
