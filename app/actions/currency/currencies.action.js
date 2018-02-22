import {
    REQUEST_CURRENCIES,
    RECEIVE_CURRENCIES,
    FAILURE_CURRENCIES
} from '../../constants/currencies.constants.js'
import * as alertActions from '../../actions/alert/alert.action.js'
import * as currenciesService from '../../services/currencies.service.js'

function requestCurrencies() {
    return {
        type: REQUEST_CURRENCIES
    }
}

function receiveCurrencies(json) {
    return {
        type: RECEIVE_CURRENCIES,
        response: json,
        receivedAt: Date.now()
    }
}

function failureCurrencies(error) {
    return {
        type: FAILURE_CURRENCIES,
        error: error
    }
}

export function fetchCurrencies() {
    return dispatch => {
        dispatch(requestCurrencies())
        currenciesService.fetchCurrencies()
            .then(
                json => {
                    dispatch(receiveCurrencies(json))
                    dispatch(alertActions.success("Successful got list of currencies"))
                }
            )
            .catch(function(error) {
                dispatch(failureCurrencies(error))
                dispatch(alertActions.error("Some problems by fetching list of currencies"))
            })
    }
}