import {
    REQUEST_INSERT_USER_CURRENCY,
    RECEIVE_INSERT_USER_CURRENCY,
    FAILURE_INSERT_USER_CURRENCY
} from '../../constants/userCurrencies.constants.js'
import * as userCurrenciesService from '../../services/userCurrencies.service.js'

function requestInsertUserCurrency(userCurrency) {
    return {
        type: REQUEST_INSERT_USER_CURRENCY,
        payload: userCurrency
    }
}

function receiveInsertUserCurrency(json) {
    return {
        type: RECEIVE_INSERT_USER_CURRENCY,
        payload: json,
        receivedAt: Date.now()
    }
}

function failureInsertUserCurrency(error) {
    return {
        type: FAILURE_INSERT_USER_CURRENCY,
        message: error.message,
        receivedAt: Date.now()
    }
}

export function insertUserCurrency(userCurrency) {
    return dispatch => {
        dispatch(requestInsertUserCurrency(userCurrency))
        userCurrenciesService.saveUserCurrency(userCurrency)
            .then(
                json => dispatch(receiveInsertUserCurrency(json))
            )
            .catch(function(error) {
                dispatch(failureInsertUserCurrency(error))
            })
    }
}