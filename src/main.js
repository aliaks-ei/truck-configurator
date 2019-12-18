import Vue          from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App   from './App.vue';
import store from './store';

import 'material-design-icons/iconfont/material-icons.css';
import './assets/styles/global.scss';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');
