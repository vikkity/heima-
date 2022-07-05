import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

import Toutiao from '@/components/Toutiao'
import vant from 'vant'
import 'vant/lib/index.less'

import 'amfe-flexible'
Vue.use(vant)

// axios引入
// import request from '@/utils/request'
//
// request.get('/v1_0/user/channels').then((res) => {
//   console.log(res)
// })

Vue.config.productionTip = false
Vue.component('Toutiao', Toutiao)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
