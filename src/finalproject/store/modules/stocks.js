import dummyData from '../../data/stocks';

const state = {
    stocks: []
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

const mutations = {
    setStocks: (state, stocks) => {
        state.stocks = stocks;
    },
    randomize: (state) => {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('finalprojectPortfolio/buyStock', order, {root: true});
    },
    initStocks: ({commit}) => {
        commit('setStocks', dummyData);
    },
    randomizeStocks: ({commit}) => {
        commit('randomize');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};