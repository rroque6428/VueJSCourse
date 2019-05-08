const state = {
    funds: 10000,
    stocks: []
};
 
const getters = { 
    stockPortfolio: (state, getters, rootState, rootGetters) => {
        return state.stocks.map(stock => {
            const record = rootGetters['finalprojectStocks/stocks'].find(e => {return e.id == stock.id});
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds: state => {
        return state.funds;
    }
};

const mutations = {
    buyStock: (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find(e => e.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
        // eslint-disable-next-line
        console.log(state.stocks, state.funds);
    },
    sellStock: (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find(e => e.id == stockId);
        if (record) {
            if (record.quantity > quantity) {
                record.quantity -= quantity;
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }
            state.funds += stockPrice * quantity;
        }
    }
};

const actions = {
    sellStock: ({commit}, order) => {
        commit('sellStock', order);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};