import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/base.scss' //base style

import loading from '@/plugins/loading'

Vue.use(loading)

// Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
