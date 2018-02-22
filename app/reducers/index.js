import { combineReducers } from 'redux'

import { fetchCurrencies } from './currencies.reducer.js'
import { alert } from './alert.reducer.js'
import { login } from './login.reducer.js'
import { 
    fetchUserCurrencies, 
    insertUserCurrency,
    buyUserCurrency,
    sellUserCurrency
} from './userCurrencies.reducer.js'

const rootReducer = combineReducers({
    fetchCurrencies,
    fetchUserCurrencies,
    insertUserCurrency,
    buyUserCurrency,
    sellUserCurrency,
    login,
    alert
})

export default rootReducer