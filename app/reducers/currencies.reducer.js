import {
    REQUEST_CURRENCIES,
    RECEIVE_CURRENCIES,
    FAILURE_CURRENCIES
} from '../constants/currencies.constants'

export function fetchCurrencies(
    state = {
        isFetching: false,
        isError: false,
        payload: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_CURRENCIES:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false
            })
        case RECEIVE_CURRENCIES:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                payload: action.response.items,
                publicationDate: action.response.publicationDate,
                lastUpdated: action.receivedAt
            })
        case FAILURE_CURRENCIES:
            return Object.assign({}, state, {
                isError: true,
                isFetching: false,
                error: action.error
            })
        default:
            return state
    }
}