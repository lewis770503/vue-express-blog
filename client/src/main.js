import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Meta from 'vue-meta';
import VueLoading from 'vue-loading-overlay';
import VueSession from 'vue-session';

//vee-validate
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import * as rules from 'vee-validate/dist/rules';
import 'bootstrap';

import App from './App.vue';
import './registerServiceWorker';


import router from './router'
import store from './store'

Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'));
Vue.use(Meta);
Vue.component('Loading', VueLoading);
Vue.use(VueSession);

// vee-validate
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
localize('zh_TW', zhTWValidate);

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');