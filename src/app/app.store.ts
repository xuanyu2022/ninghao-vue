import { createStore } from 'vuex';
import userStateModule, { UserState } from '@/user/user.store';

export interface RootState {
  name: string;
  loading: boolean;
  userStateModule?: UserState;
}
/**
 * 创建 Store
 */
const store = createStore({
  state: {
    name: '',
    loading: false,
  },
  getters: {
    name(state) {
      return `🎈 ${state.name}`;
    },
  },
  mutations: {
    setName(state, data) {
      state.name = data;
    },
    setLoading(state, data) {
      state.loading = data;
    },
  },

  /* actions: {
    getName({ commit }) {
      const name = '宁皓⽹';
      commit('setName', name);
    }, */

  actions: {
    getName({ commit }) {
      commit('setLoading', true);

      setTimeout(() => {
        const name = '宁皓⽹';
        commit('setName', name);
        commit('setLoading', false);
      }, 2000);
    },
  },

  modules: {
    userStateModule,
  },
});

export default store;
