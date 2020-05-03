import { LocalStorage } from "../../plugins/config";
import {
  CURRENT_USER,
  LOGIN_STATE,
  LOGOUT_STATE,
  MUTATE_SET_USER,
  MUTATE_SET_LOGIN_STATE,
  MUTATE_SET_LOGOUT_STATE,
  ACTION_SET_USER,
  ACTION_SIGN_IN,
  ACTION_SIGN_OUT
} from "../storeConfig";
export default {
  state: {
    currentUser:
      localStorage.getItem(LocalStorage.USER) != null
        ? JSON.parse(localStorage.getItem(LocalStorage.USER))
        : null,
    loginState: false,
    logoutState: false
  },
  getters: {
    [CURRENT_USER]: state => state.currentUser,
    [LOGIN_STATE]: state => state.loginState,
    [LOGOUT_STATE]: state => state.loginState,
  },
  mutations: {
    [MUTATE_SET_USER]: (state, payload) => {
      state.currentUser = payload;
    },
    [MUTATE_SET_LOGIN_STATE]: (state, payload) => {
      state.loginState = payload;
    },
    [MUTATE_SET_LOGOUT_STATE]: (state, payload) => {
      state.logoutState = payload;
    }
  },
  actions: {
    [ACTION_SIGN_IN]: ({ commit }, payload) => {
      commit(MUTATE_SET_LOGIN_STATE, false);
      localStorage.setItem(LocalStorage.USER, JSON.stringify(payload));
      commit(MUTATE_SET_USER, payload);
      setTimeout(() => {
        commit(MUTATE_SET_LOGIN_STATE, true);
      }, 200);
    },
    [ACTION_SIGN_OUT]: ({ commit }) => {
      localStorage.removeItem(LocalStorage.USER);
      commit(MUTATE_SET_LOGOUT_STATE, false);
      commit(MUTATE_SET_USER, null);
      setTimeout(() => {
        commit(MUTATE_SET_LOGOUT_STATE, true);
      }, 200);
    },
    [ACTION_SET_USER]: ({ commit }, payload) => {
        localStorage.setItem(LocalStorage.USER, JSON.stringify(payload));
        commit(MUTATE_SET_USER, payload);
      },
  }
};
