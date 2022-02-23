import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [],
    loggedIn: false,
  },
  mutations: {
    assignCartItems(state, val) {
      state.cartItems = [...val];
    },
    assignLoggedIn(state, val) {
      state.loggedIn = val;
    },
  },
  actions: {
    assignCartItems({ commit }, val) {
      commit("assignCartItems", val);
    },
    assignLoggedIn({ commit }, val) {
      commit("assignLoggedIn", val);
    },
  },
  modules: {},
});
