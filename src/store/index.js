import Vuex from 'vuex'


export default new Vuex.Store({
    
    state: {
        tascks:[],        
    },
    mutations: {
        uppDateState(state, payload) {
            state.tascks = payload;
        },
        clearData (state) {
            state.tascks = [];
        },
        addNewTasck(state, payload) {
            state.tascks.push(payload);
        },
        delete(state, i) {
          state.tascks.splice(i, 1);
        },
        edit(state, {i, payload}) {
          state.tascks.splice(i, 1, payload);
        },
    },
    getters: {
        getTascks: state => state.tascks,
    },
    actions: {
        loadTascks() {
            const array = JSON.parse(localStorage.getItem("tascks"))
            if (array) {
                this.commit('uppDateState', array);
            }
        },
        saveTasck(state, payload) {
            this.commit('addNewTasck', payload);
            localStorage.setItem("tascks", JSON.stringify(state.rootState.tascks));
        },
        deleteTasck(state, i) {
            this.commit('delete', i);
            localStorage.setItem("tascks", JSON.stringify(state.rootState.tascks));
        },
        editTasck(state, payload) {
            this.commit('edit', payload);
            localStorage.setItem("tascks", JSON.stringify(state.rootState.tascks));
        }
    }
})