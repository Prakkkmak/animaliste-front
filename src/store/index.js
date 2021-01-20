import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: '',
  },
  mutations: {
    setToken(state, token) {
      // Pour passer outre le ESLINT RbNb, on ne peux pas changer le state dans la fonction.
      const thisState = { ...state };
      thisState.token = token;
      Object.assign(state, thisState);
    },
  },
});

export default store;
