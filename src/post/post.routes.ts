import { RouteRecordRaw } from 'vue-router';
import PostIndex from './index/post-index.vue';
import PostShow from './post-show.vue';
import PostMeta from './show/components/post-meta.vue';
/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    name: 'postIndex',
    component: PostIndex,
  },
  {
    path: '/posts/:postId',
    name: 'postShow',
    component: PostShow,
    children: [
      {
        path: 'meta',
        component: PostMeta,
      },
    ],
  },
];

export default routes;