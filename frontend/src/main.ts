import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import moment from 'moment';
import Vue from 'vue';
import API from './api'
import App from './resources/App.vue'

/**
 * Author: Hypnos (Layne Balsters)
 */

Vue.config.productionTip = false
Vue.prototype.$http = API
const token = localStorage.getItem('token');
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.filter('formatDate', function (value: any) {
  if (value) {
    return moment.unix(value).format('MMM Do, YYYY hh:mm A')
  }
});

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  render: h => h(App)
}).$mount('#app');
