<template>
  <el-card class="box-card">
    <div class="clearfix header" slot="header">
      <span>找回密码</span>
    </div>
    <div class="grid-content bg-purple-dark">
      <el-form :model="resetForm" :rules="rules" ref="resetForm" :label-position="labelPosition"
               label-width="100px" class="demo-resetForm">
        <el-form-item prop="phone">
          <el-input v-model="resetForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="请输入验证码" v-model="code">
            <el-button slot="append" @click="sendCode('resetForm')" :disabled="codeButton.disabled">
              {{codeButton.name}}
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="resetForm.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item class="auth-login-wrap">
          <el-button type="primary" @click="reset('resetForm')" class="btn-login">找回密码</el-button>
          <router-link to="/auth/login">
            <el-button type="text">已有账号？点击登录</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import {reset, sendCode} from '@/api/auth'

export default {
  data () {
    return {
      labelPosition: 'top',
      codeButton: {
        name: '发送验证码',
        disabled: false
      },
      resetForm: {
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
        ]
      }
    }
  },
  methods: {
    sendCode (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sendCode(this.loginForm).then(response => {
            localStorage.setItem('token', response.token)
            let _this = this
            this.$message({
              message: response.message,
              type: 'success'
            })
            _this.$router.push('/')
          })
        } else {
          return false
        }
      })
    }
  },
  register (formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        reset(this.loginForm).then(response => {
          localStorage.setItem('token', response.token)
          let _this = this
          this.$message({
            message: response.message,
            type: 'success'
          })
          _this.$router.push('/')
        })
      } else {
        return false
      }
    })
  }
}
</script>
