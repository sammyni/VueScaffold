/*jshint esversion: 6*/

const initialState = () => ({
  username: "user"
});

// State
const state = initialState();

// Getter
const getters = {
  getUsername(state) {
    return state.username;
  }
};

// Actions
const actions = {
  reset({ commit }) {
    commit("RESET");
  }
};

// Mutations
const mutations = {
  RESET(state) {
    const newState = initialState();
    Object.keys(newState).forEach(key => (state[key] = newState[key]));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
