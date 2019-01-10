<template>
  <el-card class="box-card">
    <div class="clearfix header" slot="header">
      <span>登&nbsp;录</span>
    </div>
    <div class="grid-content bg-purple-dark">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" :label-position="labelPosition"
               label-width="100px" class="demo-loginForm">
        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item class="auth-login-wrap">
          <el-col :span="24">
            <el-button type="primary" @click="login('loginForm')" class="btn-login">立即登录</el-button>
          </el-col>
          <el-col :span="12" class="left">
            <router-link to="/auth/register">
              <el-button type="text">还没有账号？点击注册</el-button>
            </router-link>
          </el-col>
          <el-col :span="12" class="right">
            <router-link to="/auth/reset">
              <el-button type="text">忘记密码？</el-button>
            </router-link>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>

export default {
  data () {
    return {
      labelPosition: 'top',
      loginForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'change'},
          {min: 6, max: 20, message: '请输入6-20位密码'}
        ]
      },
      // 登录后跳转页面
      redirect: ''
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.$router.push({
              path: this.redirect || '/'
            })
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
