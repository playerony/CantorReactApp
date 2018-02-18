import {
    REQUEST_BUY_USER_CURRENCY,
    RECEIVE_BUY_USER_CURRENCY,
    FAILURE_BUY_USER_CURRENCY,

    REQUEST_SELL_USER_CURRENCY,
    RECEIVE_SELL_USER_CURRENCY,
    FAILURE_SELL_USER_CURRENCY
} from '../../constants/userCurrencies.constants.js'
import * as userCurrenciesService from '../../services/userCurrencies.service.js'

function requestBuyUserCurrency(userCurrency) {
    return {
        type: REQUEST_BUY_USER_CURRENCY,
        payload: userCurrency
    }
}

function requestSellUserCurrency(userCurrency) {
    return {
        type: REQUEST_SELL_USER_CURRENCY,
        payload: userCurrency
    }
}

function receiveBuyUserCurrency(json) {
    return {
        type: RECEIVE_BUY_USER_CURRENCY,
        payload: json,
        receivedAt: Date.now()
    }
}

function receiveSellUserCurrency(json) {
    return {
        type: RECEIVE_SELL_USER_CURRENCY,
        payload: json,
        receivedAt: Date.now()
    }
}

function failureBuyUserCurrency(error) {
    return {
        type: FAILURE_BUY_USER_CURRENCY,
        message: error.message,
        receivedAt: Date.now()
    }
}

function failureSellUserCurrency(error) {
    return {
        type: FAILURE_SELL_USER_CURRENCY,
        message: error.message,
        receivedAt: Date.now()
    }
}

export function buyUserCurrency(userCurrency) {
    return dispatch => {
        dispatch(requestBuyUserCurrency(userCurrency))
        userCurrenciesService.buyCurrency(userCurrency)
            .then(
                json => dispatch(receiveBuyUserCurrency(json))
            )
            .catch(function(error) {
                dispatch(failureBuyUserCurrency(error))
            })
    }
}

export function sellUserCurrency(userCurrency) {
    return dispatch => {
        dispatch(requestSellUserCurrency(userCurrency))
        userCurrenciesService.sellCurrency(userCurrency)
            .then(
                json => dispatch(receiveSellUserCurrency(json))
            )
            .catch(function(error) {
                dispatch(failureSellUserCurrency(error))
            })
    }
}