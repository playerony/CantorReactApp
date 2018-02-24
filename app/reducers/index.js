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
import { 
    fetchUser, 
    insertUser,
    updateUser,
    deleteUser
} from './user.reducer.js'

const rootReducer = combineReducers({
    fetchCurrencies,
    fetchUserCurrencies,
    insertUserCurrency,
    buyUserCurrency,
    sellUserCurrency,
    fetchUser,
    insertUser,
    updateUser,
    deleteUser,
    login,
    alert
})

export default rootReducer