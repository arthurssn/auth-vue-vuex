import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http/index'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    usuario: {}
  },
  getters: {
    userIsLogged: state => Boolean(state.token)
  },
  mutations: {
    SET_LOGGED_USER(state, { token, usuario }) {
      state.token = token;
      state.usuario = usuario;
    },
    DESLOGAR_USUARIO(state) {
      state.token = null;
      state.usuario = {};
      localStorage.removeItem('token');
    }
  },
  actions: {
    efetuarLogin({ commit }, usuario) {
      return new Promise((resolve, reject) => {
        http.post('auth/login', usuario)
          .then(response => {
            commit('SET_LOGGED_USER', {
              token: response.data.access_token,
              usuario: response.data.user,
            })
            localStorage.setItem('token', response.data.access_token)
            router.push({ name: 'gerentes' })
            resolve(response.data)
          }).catch(err => {
            reject(err)
          })
      })
    },
  },
  modules: {
  }
})
