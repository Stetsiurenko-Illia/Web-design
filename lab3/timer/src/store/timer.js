import { createStore } from 'vuex'
import vuexPersistedstate from "vuex-plugin-persistedstate";

const timer = createStore({
  strict: true,
    state: {
      timers: [],
      haveList: false
    },
    mutations: {
      addTimer(state, timer) {
        state.timers.push(timer);
      },
      deleteTimer(state, timer) {
        const index = state.timers.indexOf(timer);
        if (index > -1) {
          state.timers.splice(index, 1);
        }
      },
      setHaveList(haveList) {
        state.haveList = haveList;
        if(haveList){
          state.haveList = true;
        } else{
          state.haveList = false;
        }
      },
    },
    plugins: [vuexPersistedstate()]
})

export default timer;