import './client/common';
import './styles/style.css';
import Vue from 'vue';
import App from './views/layouts/App.vue';
import router from './client/routes';
import store from './client/store';

function requireAll (r) {
  r.keys().forEach(r);
}
requireAll(require.context('./assets/img/', true, /\.svg$/));

if (module.hot) module.hot.accept();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
