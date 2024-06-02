import { createStore } from 'vuex';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './state';
import * as actions from './actions';

const store = createStore({
    actions,
    mutations,
    getters,
    state
});

export default store;