// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import http from './http'
Vue.prototype.$http = http;

//ui组件
import { Toast } from 'mint-ui'
Vue.prototype.$toast = Toast;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//使用router
	store,//使用store
  components: { App },
  template: '<App/>'
})
