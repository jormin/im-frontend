import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import friends from './modules/friends'
import sessions from './modules/sessions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    friends,
    sessions
  }
})

// 监听
store.watch(
  (state) => state.sessions.sessions,
  (val) => {
    localStorage.setItem('vue-chat-session', JSON.stringify(val))
  },
  {
    deep: true
  }
)

export default store
