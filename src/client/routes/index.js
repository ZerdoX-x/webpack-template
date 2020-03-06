import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../../views/pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '*',
    name: 'Error',
    component: () => import('../../views/pages/Error.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
