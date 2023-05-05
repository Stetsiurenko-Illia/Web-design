import { createStore } from 'vuex'
import vuexPersistedstate from "vuex-plugin-persistedstate";

const account = createStore({
    strict: true,
        state: {
            token: null,
            user: null,
            isUserLoggedIn: false,
        },
        mutations: {
          setToken (state, token) {
            state.token = token
            if(token){
              state.isUserLoggedIn = true;
            } else{
              state.isUserLoggedIn = false;
            }
          },
          setUser (state, user) {
            state.user = user
          }
        },
        actions: {
          setToken ({commit}, token) {
            commit('setToken', token)
          },
          setUser ({commit}, user) {
            commit('setUser', user)
          }
        },
    plugins: [vuexPersistedstate()]
})

export default account;