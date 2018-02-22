import {
    REQUEST_INSERT_USER_CURRENCY,
    RECEIVE_INSERT_USER_CURRENCY,
    FAILURE_INSERT_USER_CURRENCY
} from '../../constants/userCurrencies.constants.js'
import * as userCurrenciesService from '../../services/userCurrencies.service.js'

function requestInsertUserCurrency(userCurrency) {
    return {
        type: REQUEST_INSERT_USER_CURRENCY,
        userCurrency
    }
}

function receiveInsertUserCurrency(json) {
    return {
        type: RECEIVE_INSERT_USER_CURRENCY,
        response: json,
        receivedAt: Date.now()
    }
}

function failureInsertUserCurrency(error) {
    return {
        type: FAILURE_INSERT_USER_CURRENCY,
        error: error
    }
}

export function insertUserCurrency(userCurrency) {
    return dispatch => {
        dispatch(requestInsertUserCurrency(userCurrency))
        userCurrenciesService.saveUserCurrency(userCurrency)
            .then(
                json => {
                    dispatch(receiveInsertUserCurrency(json))
                    dispatch(alertActions.success("Successful added new user currency"))
                }
            )
            .catch(function(error) {
                dispatch(failureInsertUserCurrency(error))
                dispatch(alertActions.error("Some problems by adding new currency"))
            })
    }
}