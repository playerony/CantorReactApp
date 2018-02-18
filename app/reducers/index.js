import { combineReducers } from 'redux'

import { fetchCurrencies } from './currencies.reducer.js'
import { fetchCurrency } from './currency.reducer.js'
import { login } from './login.reducer.js'
import { 
    fetchUserCurrencies, 
    insertUserCurrency,
    buyUserCurrency,
    sellUserCurrency
} from './userCurrencies.reducer.js'

import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    fetchCurrencies,
    fetchCurrency,
    fetchUserCurrencies,
    insertUserCurrency,
    buyUserCurrency,
    sellUserCurrency,
    login,
    routerReducer
})

export default rootReducer