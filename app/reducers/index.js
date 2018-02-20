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

const rootReducer = combineReducers({
    fetchCurrencies,
    fetchCurrency,
    fetchUserCurrencies,
    insertUserCurrency,
    buyUserCurrency,
    sellUserCurrency,
    login
})

export default rootReducer