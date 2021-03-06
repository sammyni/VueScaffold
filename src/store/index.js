/*jshint esversion: 6*/

import Vue from "vue";
/*jshint esversion: 6*/

import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import modules from "./modules";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules,
  actions: {
    reset({ commit }) {
      // reset state of modules
      Object.keys(modules).forEach(moduleName => {
        commit(`${moduleName}/RESET`);
      });
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
