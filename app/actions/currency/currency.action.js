import {
    REQUEST_CURRENCY,
    RECEIVE_CURRENCY,
    FAILURE_CURRENCY
} from '../../constants/currencies.constants.js'
import { fetchCurrencies } from './currencies.action.js'

function requestCurrency(currencyCode) {
    return {
        type: REQUEST_CURRENCY,
        currencyCode
    }
}

function receiveCurrency(json) {
    return {
        type: RECEIVE_CURRENCY,
        currency: json,
        receivedAt: Date.now()
    }
}

export function fetchCurrency(currencyCode) {
    return dispatch => {
        dispatch(requestCurrency(currencyCode))
        dispatch(receiveCurrency(fetchCurrencies().currencies[currencyCode]))
    }
}