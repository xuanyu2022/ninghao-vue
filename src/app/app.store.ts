import { createStore } from 'vuex';
/**
 * 创建 Store
 */
const store = createStore({
  state: {
    name: '',
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
  },

  actions: {
    getName({ commit }) {
      const name = '宁皓⽹';
      commit('setName', name);
    },
  },
});

export default store;
