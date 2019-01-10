<template>
  <el-button @click="sendCode()" :disabled="codeButton.disabled">
    {{codeButton.name}}
  </el-button>
</template>

<script>
import {sendCode} from '@/api/auth'
export default {
  data () {
    return {
      codeButton: {
        name: '发送验证码',
        disabled: false
      }
    }
  },
  methods: {
    sendCode () {
      this.$emit('sendCode', () => {
        this.codeButton.disabled = true
        let params = {phone: this.registerForm.phone, type: this.props.type}
        sendCode(params).then((response) => {
          this.countdown(response.data.expireTime)
        })
      })
    },
    countdown (time) {
      let interval = setInterval(() => {
        time--
        this.codeButton.name = '重新发送(' + time + ')'
        if (time === 0) {
          clearInterval(interval)
          this.codeButton.name = '发送验证码'
          this.codeButton.disabled = false
        }
      }, 1000)
    }
  }
}
</script>
