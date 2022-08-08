import { createStore } from 'vuex';
import { PostCreateStoreState } from '../post/create/post-create.store';
import { AbcdEfg, postStoreModule, PostStoreState } from '../post/post.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  name: AbcdEfg;
  name2: PostCreateStoreState;
}
/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: '宁皓⽹',
  } as RootState,
  modules: {
    post: postStoreModule,
  },
});

/**
 * 默认导出
 */
export default store;
