import {
    REQUEST_USER_CURRENCIES,
    RECEIVE_USER_CURRENCIES,
    FAILURE_USER_CURRENCIES,

    REQUEST_USER_CURRENCY,
    RECEIVE_USER_CURRENCY,
    FAILURE_USER_CURRENCY
} from '../../constants/userCurrencies.constants.js'
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
        payload: json,
        userId,
        receivedAt: Date.now()
    }
}

function receiveUserCurrency(userCurrencyId, json) {
    return {
        type: RECEIVE_USER_CURRENCY,
        payload: json,
        userCurrencyId,
        receivedAt: Date.now()
    }
}

function failureUserCurrencies(error) {
    return {
        type: FAILURE_USER_CURRENCIES,
        message: error.message,
        receivedAt: Date.now()
    }
}

function failureUserCurrency(error) {
    return {
        type: FAILURE_USER_CURRENCY,
        message: error.message,
        receivedAt: Date.now()
    }
}

export function fetchUserCurrencies(userId) {
    return dispatch => {
        dispatch(requestUserCurrencies(userId))
        userCurrenciesService.getUserCurrencies(userId)
            .then(
                json => dispatch(receiveUserCurrencies(userId, json))
            )
            .catch(function(error) {
                dispatch(failureUserCurrencies(error))
            })
    }
}

export function fetchUserCurrency(userCurrencyId) {
    return dispatch => {
        dispatch(requestUserCurrency(userCurrencyId))
        userCurrenciesService.getUserCurrency(userCurrencyId)
            .then(
                json => dispatch(receiveUserCurrency(userCurrencyId, json))
            )
            .catch(function(error) {
                dispatch(failureUserCurrency(error))
            })
    }
}