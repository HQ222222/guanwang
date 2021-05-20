import Vue from 'vue';
import VueRouter from 'vue-router';

import app from '../App.vue';
import nao from '../dida/nao.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: app,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/nao',
    name: 'nao',
    component: nao,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,

  routes,
});

export default router;
