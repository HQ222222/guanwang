/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  error: './assets/logo.png',
  loading: 'https://source.unsplash.com/random',
  attempt: 1,
  preLoad: 1,
});

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:8080/china';
// eslint-disable-next-line no-unused-vars
Vue.filter('articleType', (value) => {
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
