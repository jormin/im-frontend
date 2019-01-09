export default {
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
}
