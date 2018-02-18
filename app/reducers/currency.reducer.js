import {
    REQUEST_CURRENCY,
    RECEIVE_CURRENCY,
    FAILURE_CURRENCY
} from '../constants/currencies.constants.js'

export function fetchCurrency(
    state = {
        isFetching: false,
        error: false,
        item: null
    },
    action
) {
    switch (action.type) {
        case REQUEST_CURRENCY:
            return Object.assign({}, state, {
                isFetching: true,
                error: false
            })
        case RECEIVE_CURRENCY:
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                item: action.currency,
                lastUpdated: action.receivedAt
            })
        case FAILURE_CURRENCY:
            return Object.assign({}, state, {
                error: true
            })
        default:
            return state
    }
}