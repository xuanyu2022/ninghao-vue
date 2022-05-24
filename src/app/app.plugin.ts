import { Plugin } from 'vuex';
import { RootState } from '@/app/app.store';

export const logger: Plugin<RootState> = store => {
  store.subscribe((mutation, state) => {
    // console.log('logger: ', mutation, state);
    if (mutation.type === 'userStateModule/setCurrentUser') {
      console.log(`当前⽤户变成了： ${mutation.payload}`);
    }
  });
};
