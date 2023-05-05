import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'


export default createStore({
  strict: true,
        state: {
            token: null,
            user: null,
            isUserLoggedIn: false,
            timers: [],
            haveList: false,
            lastTimerId: null,
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
          },
          addTimer(state, timer) {
            if(timer)state.timers.push({...timer});
            else state.timers = []
            
          },          
          setHaveList(state, haveList) {
            state.haveList = haveList;
            if(haveList){
              state.haveList = true;
            } else{
              state.haveList = false;
            }
          },
          setID (state, id) {
            state.lastTimerId = id
          },
          updateTimers(state, data){
            state.token = data.token;
            state.user = data.user;
            state.timers = data.user.timers
          }
        },
        actions: {
          setToken ({commit}, token) {
            commit('setToken', token)
          },
          setUser ({commit}, user) {
            commit('setUser', user)
          },
          addTimer ({commit}, timer) {
            commit('addTimer', timer)
          },
          setHaveList ({commit}, haveList) {
            commit('setHaveList', haveList)
          },
          setID ({commit}, id) {
            commit('setID', id)
          },
        },
    plugins: [createPersistedState()]
})


