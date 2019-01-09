import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import Cookies from 'js-cookie';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.less'
import store from './store/index'
import router from './router/index'
import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Element)

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
