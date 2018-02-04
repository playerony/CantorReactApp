import { combineReducers } from 'redux';

import { fetchCurrencies } from './currencies.reducer.js';

const rootReducer = combineReducers({
    fetchCurrencies
});

export default rootReducer;