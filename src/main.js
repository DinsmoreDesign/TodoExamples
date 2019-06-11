import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = 'https://todo-api.cogb.us';
axios.defaults.headers.common['candidate-uuid'] = 'c2a555b7-b528-4ced-918e-cfd98845cd2d';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  	render: h => h(App),
}).$mount('#app')
