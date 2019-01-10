<template>
  <el-row id="main-board">
    <el-col :offset="1" :span="24" id="chat-wrap" class="full-height">
      <el-row class="full-height">
        <el-col :span="7" class="full-height chat-panel">
          <div class="header">
            <el-row>
              <el-col :span="6" class="avatar">
                <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
              </el-col>
              <el-col :span="18" class="user-info">
                <el-row>
                  <el-col :span="18">Jormin</el-col>
                  <el-col :span="6" class="sign-out"><i class="fa fa-sign-out"></i></el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <div class="search-bar">
            <el-input
              placeholder="搜索"
              prefix-icon="el-icon-search"
              size="small"
              class="search-input"
            >
            </el-input>
          </div>
          <div class="tab">
            <el-row class="tab-card">
              <el-col :span="12" class="chat-sessions active">
                <i class="fa fa-comment"></i>
              </el-col>
              <el-col :span="12">
                <i class="fa fa-user-o"></i>
              </el-col>
            </el-row>
          </div>
          <div class="nav-content">
            <div class="nav-wap">
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
              <el-row class="session">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="18" class="chat-info">
                  <div class="nickname">测试</div>
                  <div class="message">最近一次聊天记录</div>
                </el-col>
              </el-row>
            </div>
            <div class="nav-wap" style="display: none"></div>
          </div>
        </el-col>
        <el-col :span="17" class="full-height chat-area">
          <div class="header">
            <div class="title-wrap">
              <span>Swoole开发者</span>
            </div>
          </div>
          <div class="middle">
            <div class="content-wrap">
              <el-row class="message-time">16分钟前</el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
              <el-row class="message-wrap">
                <el-col :span="6" class="avatar">
                  <img src="https://secure.gravatar.com/avatar/0a08a0d2d25e888a868b6e36dae450d6" alt="" class="avatar">
                </el-col>
                <el-col :span="14" class="message message-left">
                  <span>11111111111111111121111111111111111112111111111111111111211111111111111111121111111111111111112</span>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="footer">
            <div class="tool-bar">
              <i class="fa fa-smile-o"></i>
              <i class="fa fa-cut"></i>
              <i class="fa fa-folder-o"></i>
            </div>
            <div class="input-bar">
              <div class="input-wrap" contenteditable="true"></div>
            </div>
            <div class="enter-bar">
              <span class="tip">按下cmd+enter换行</span><el-button size="small">发送</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({currentUser: 'auth.currentUser'}),
    ...mapGetters({token: 'auth.getToken'})
  },
  created () {
    if (!this.$store.state.auth.currentUser.id) {
      this.$store.dispatch('GetUserInfo')
    }
  }
}
</script>

<style>
</style>
