import { RouteRecordRaw } from 'vue-router';
import PostIndex from './index/post-index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'postIndex',
    path: '/posts',
    component: PostIndex,
  },
];

export default routes;
