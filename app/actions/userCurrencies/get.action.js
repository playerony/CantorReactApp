import {
    REQUEST_USER_CURRENCIES,
    RECEIVE_USER_CURRENCIES,
    FAILURE_USER_CURRENCIES,

    REQUEST_USER_CURRENCY,
    RECEIVE_USER_CURRENCY,
    FAILURE_USER_CURRENCY
} from '../../constants/userCurrencies.constants.js'
import * as alertActions from '../../actions/alert/alert.action.js'
import * as userCurrenciesService from '../../services/userCurrencies.service.js'

function requestUserCurrencies(userId) {
    return {
        type: REQUEST_USER_CURRENCIES,
        userId
    }
}

function requestUserCurrency(userCurrencyId) {
    return {
        type: REQUEST_USER_CURRENCY,
        userCurrencyId
    }
}

function receiveUserCurrencies(userId, json) {
    return {
        type: RECEIVE_USER_CURRENCIES,
        response: json,
        userId,
        receivedAt: Date.now()
    }
}

function receiveUserCurrency(userCurrencyId, json) {
    return {
        type: RECEIVE_USER_CURRENCY,
        response: json,
        userCurrencyId,
        receivedAt: Date.now()
    }
}

function failureUserCurrencies(error) {
    return {
        type: FAILURE_USER_CURRENCIES,
        error: error
    }
}

function failureUserCurrency(error) {
    return {
        type: FAILURE_USER_CURRENCY,
        error: error
    }
}

export function fetchUserCurrencies(userId) {
    return dispatch => {
        dispatch(requestUserCurrencies(userId))
        userCurrenciesService.getUserCurrencies(userId)
            .then(
                json => {
                    dispatch(receiveUserCurrencies(userId, json))
                    dispatch(alertActions.success("Successful got items for user wallet"))
                }
            )
            .catch(function(error) {
                dispatch(failureUserCurrencies(error))
                dispatch(alertActions.error("Some problems by fetching user wallet"))
            })
    }
}

export function fetchUserCurrency(userCurrencyId) {
    return dispatch => {
        dispatch(requestUserCurrency(userCurrencyId))
        userCurrenciesService.getUserCurrency(userCurrencyId)
            .then(
                json => {
                    dispatch(receiveUserCurrency(userCurrencyId, json))
                    dispatch(alertActions.success("Successful got user currency"))
                }
            )
            .catch(function(error) {
                dispatch(failureUserCurrency(error))
                dispatch(alertActions.error("Some problems by fetching user currrency"))
            })
    }
}