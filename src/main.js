import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
// import VueLazyload from 'vue-lazyload';
import Button from 'ant-design-vue/lib/button';
import input from 'ant-design-vue/lib/input';
import card from 'ant-design-vue/lib/card';
import icon from 'ant-design-vue/lib/icon';
import meta from 'ant-design-vue/lib/card/Meta';
import avatar from 'ant-design-vue/lib/avatar';
import modal from 'ant-design-vue/lib/modal';
import alert from 'ant-design-vue/lib/alert';
import result from 'ant-design-vue/lib/result';
import * as echarts from 'echarts';
// import I18n from './i18n/i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import hqM from './hq/hq-media.vue';
import wl from './hq/wulian.vue';
import 'ant-design-vue/dist/antd.css';

Vue.prototype.$echarts = echarts;
Vue.component(alert.name, alert);
Vue.use(modal);
Vue.component(meta.name, meta);
Vue.component(avatar.name, avatar);
Vue.component(icon.name, icon);
Vue.component(card.name, card);
Vue.component(Button.name, Button);
Vue.component(input.name, input);
Vue.component(result.name, result);
Vue.use(VueAxios, axios);
// Vue.use(VueI18n);
// const i18n = new VueI18n({
//   locale:
//     localStorage.getItem('lang') === (undefined || '' || null)
//       ? 'zh'
//       : localStorage.getItem('lang'),
//   messages: {
//     zh: require('../static/lang/text-zh.json'),
//     en: require('../static/lang/text-en.json'),
//   },
// });

axios.defaults.baseURL = 'http://localhost:8778';

// Vue.use(VueAxios, axios);
// Vue.use(VueLazyload, {
//   error: './assets/logo.png',
//   loading: 'https://source.unsplash.com/random',
//   attempt: 1,
//   preLoad: 1,
// });
Vue.component('hq-media', hqM);
Vue.component('wulian', wl);

// Vue.config.productionTip = false;
// axios.defaults.baseURL = 'http://127.0.0.1:8080/china';
// eslint-disable-next-line no-unused-vars
Vue.filter('articleType', (value) => {
});
new Vue({
  router,
  store,
  // I18n,
  render: (h) => h(App),
}).$mount('#app');
