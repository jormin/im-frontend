<template>
  <el-card class="box-card">
    <div class="clearfix header" slot="header">
      <span>注&nbsp;册</span>
    </div>
    <div class="grid-content bg-purple-dark">
      <el-form :model="registerForm" :rules="rules" ref="registerForm" :label-position="labelPosition"
               label-width="100px" class="demo-registerForm">
        <el-form-item prop="phone">
          <el-input v-model="registerForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="请输入验证码" v-model="registerForm.code">
            <el-button slot="append" @click="sendCode()" :disabled="codeButton.disabled">
              {{codeButton.name}}
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="nickname">
          <el-input v-model="registerForm.nickname" placeholder="请输入昵称" type="nickname"></el-input>
        </el-form-item>
        <el-form-item class="auth-login-wrap">
          <el-button type="primary" @click="register()" class="btn-login">立即注册</el-button>
          <router-link to="/auth/login">
            <el-button type="text">已有账号？点击登录</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import {register, sendCode} from '@/api/auth'

export default {
  data () {
    return {
      formName: 'registerForm',
      labelPosition: 'top',
      codeButton: {
        name: '发送验证码',
        disabled: false,
        interval: null
      },
      registerForm: {
        phone: '',
        password: '',
        nickname: '',
        code: ''
      },
      rules: {
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'change'},
          {min: 6, max: 20, message: '请输入6-20位密码'}
        ],
        nickname: [
          {required: true, message: '请输入昵称', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    sendCode () {
      this.$refs[this.formName].validateField(['phone'], (error) => {
        if (!error) {
          this.codeButton.disabled = true
          let params = {
            type: 0,
            phone: this.registerForm.phone
          }
          sendCode(params).then((response) => {
            this.countdown(response.data.expireTime)
          })
        } else {
          return false
        }
      })
    },
    countdown (time) {
      this.interval = setInterval(() => {
        time--
        this.codeButton.name = '重新发送(' + time + ')'
        if (time === 0) {
          this.stopCountdown()
        }
      }, 1000)
    },
    stopCountdown () {
      clearInterval(this.interval)
      this.interval = null
      this.codeButton.name = '发送验证码'
      this.codeButton.disabled = false
    },
    register () {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          register(this.registerForm).then(response => {
            if (response.code === 0) {
              this.$router.push('/auth/login')
            } else {
              this.stopCountdown()
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
