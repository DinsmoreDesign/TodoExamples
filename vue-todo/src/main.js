import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import buildApi from '../../api';

axios.defaults.baseURL = '/api';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

if (process.env.NODE_ENV === 'development') { buildApi() };

new Vue({
  	render: h => h(App),
}).$mount('#app')
