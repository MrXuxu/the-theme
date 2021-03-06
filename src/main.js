import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from '@/store/index'
import './plugins/element.js'
import Theme from '@/mixin/theme'

Vue.mixin(Theme)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
