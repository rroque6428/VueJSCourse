const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    counterClicks: state => {
        return state.counter + ' Clicks';
    },
    counter: state => {
        return state.counter;
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    },
    setCounter: (state, value) => {
        state.counter = value;
    }
};

const actions = {
    increment: ({commit}, payload) => {
        commit('increment', payload);
    },
    decrement: ({commit}) => {
        commit('decrement');
    }, 
    asyncIncrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('increment',  payload.by);
        }, payload.duration);
    },
    setCounter: ({commit}, value) => {
        commit('setCounter', value);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};