import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 200,
  },
  mutations: {
    add(state) {
      state.count += 1;
    },
  },
  actions: {
    addcount(obj) {
      // eslint-disable-next-line no-console
      console.log(obj);
      obj.commit('add');
    },
  },
  modules: {
    m2: {
      namespaced: true,
      state: {
        con: 111,
      },
      mutations: {
        addm(state) {
          state.con += 1;
          // eslint-disable-next-line no-console
          console.log('改变con成功');
        },
      },
    },
  },
});
