import { RouteRecordRaw } from 'vue-router';
import Apphome from './components/app-home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Apphome,
  },
];

export default routes;
