import {
    REQUEST_CURRENCIES,
    RECEIVE_CURRENCIES,
    FAILURE_CURRENCIES
} from '../../constants/currencies.constants.js'
import * as currenciesService from '../../services/currencies.service.js'

function requestCurrencies() {
    return {
        type: REQUEST_CURRENCIES
    }
}

function receiveCurrencies(json) {
    console.log(json)

    return {
        type: RECEIVE_CURRENCIES,
        payload: json,
        receivedAt: Date.now()
    }
}

function failureCurrencies(error) {
    return {
        type: FAILURE_CURRENCIES,
        message: error.message,
        receivedAt: Date.now()
    }
}

export function fetchCurrencies() {
    return dispatch => {
        dispatch(requestCurrencies())
        currenciesService.fetchCurrencies()
            .then(
                json => dispatch(receiveCurrencies(json))
            )
            .catch(function(error) {
                dispatch(failureCurrencies(error))
            })
    }
}