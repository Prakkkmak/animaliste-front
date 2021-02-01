import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    token: "",
  },
  mutations: {
    setToken(state, token) {
      // Pour passer outre le ESLINT RbNb, on ne peux pas changer le state dans la fonction.
      const thisState = { ...state };
      thisState.token = token;
      Object.assign(state, thisState);
    },
    getToken(state) {
      return state.token;
    },
    compareToken(state, token) {
      return state.token === token;
    },
  },
});

export default store;
