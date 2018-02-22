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
        userCurrency
    }
}

function requestSellUserCurrency(userCurrency) {
    return {
        type: REQUEST_SELL_USER_CURRENCY,
        userCurrency
    }
}

function receiveBuyUserCurrency(json) {
    return {
        type: RECEIVE_BUY_USER_CURRENCY,
        response: json,
        receivedAt: Date.now()
    }
}

function receiveSellUserCurrency(json) {
    return {
        type: RECEIVE_SELL_USER_CURRENCY,
        response: json,
        receivedAt: Date.now()
    }
}

function failureBuyUserCurrency(error) {
    return {
        type: FAILURE_BUY_USER_CURRENCY,
        error: error
    }
}

function failureSellUserCurrency(error) {
    return {
        type: FAILURE_SELL_USER_CURRENCY,
        error: error
    }
}

export function buyUserCurrency(userCurrency) {
    return dispatch => {
        dispatch(requestBuyUserCurrency(userCurrency))
        userCurrenciesService.buyCurrency(userCurrency)
            .then(
                json => {
                    dispatch(receiveBuyUserCurrency(json))
                    dispatch(alertActions.success("Successful bought " + userCurrency.currencyCode + " currency"))
                }
            )
            .catch(function(error) {
                dispatch(failureBuyUserCurrency(error))
                dispatch(alertActions.error("Some problems by buying a " + userCurrency.currencyCode + " currency"))
            })
    }
}

export function sellUserCurrency(userCurrency) {
    return dispatch => {
        dispatch(requestSellUserCurrency(userCurrency))
        userCurrenciesService.sellCurrency(userCurrency)
            .then(
                json => {
                    dispatch(receiveSellUserCurrency(json))
                    dispatch(alertActions.success("Successful sold " + userCurrency.currencyCode + " currency"))
                }
            )
            .catch(function(error) {
                dispatch(failureSellUserCurrency(error))
                dispatch(alertActions.error("Some problems by selling a " + userCurrency.currencyCode + " currency"))
            })
    }
}