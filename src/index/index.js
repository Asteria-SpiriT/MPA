import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import axios from '../../util/axiosPlugin'

// Vue.prototype.$http = axios
Vue.use(axios)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})