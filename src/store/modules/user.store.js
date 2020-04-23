/*jshint esversion: 9*/
import { getUser } from "@/services/api/user.api";

const initialState = () => ({
  user: {}
});

// State
const state = initialState();

// Getter
const getters = {
  getUser(state) {
    return state.user;
  }
};

// Actions
const actions = {
  reset({ commit }) {
    commit("RESET");
  },
  async getUser({ commit }, userId) {
    try {
      const response = await getUser(userId);
      commit("SET_USER", response.data);
    } catch (error) {
      console.log(error);
    }
  }
};

// Mutations
const mutations = {
  RESET(state) {
    const newState = initialState();
    Object.keys(newState).forEach(key => (state[key] = newState[key]));
  },
  SET_USER(state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
