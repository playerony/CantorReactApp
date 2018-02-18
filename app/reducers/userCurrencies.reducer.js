import {
    REQUEST_BUY_USER_CURRENCY,
    REQUEST_INSERT_USER_CURRENCY,
    REQUEST_USER_CURRENCIES,
    REQUEST_SELL_USER_CURRENCY,
    REQUEST_USER_CURRENCY,

    RECEIVE_BUY_USER_CURRENCY,
    RECEIVE_INSERT_USER_CURRENCY,
    RECEIVE_USER_CURRENCIES,
    RECEIVE_SELL_USER_CURRENCY,
    RECEIVE_USER_CURRENCY,

    FAILURE_BUY_USER_CURRENCY,
    FAILURE_INSERT_USER_CURRENCY,
    FAILURE_USER_CURRENCIES,
    FAILURE_SELL_USER_CURRENCY,
    FAILURE_USER_CURRENCY
} from '../constants/userCurrencies.constants'

export function fetchUserCurrencies(
    state = {
        isFetching: false,
        error: false,
        payload: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_USER_CURRENCIES:
            return Object.assign({}, state, {
                isFetching: true,
                error: false
            })
        case RECEIVE_USER_CURRENCIES:
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                payload: action.payload,
                lastUpdated: action.receivedAt
            })
        case FAILURE_USER_CURRENCIES:
            return Object.assign({}, state, {
                error: true,
                isFetching: true,
                payload: action.payload
            })
        default:
            return state
    }
}

export function insertUserCurrency(
    state = {
        isFetching: false,
        error: false
    },
    action
) {
    switch (action.type) {
        case REQUEST_INSERT_USER_CURRENCY:
            return Object.assign({}, state, {
                isFetching: true,
                error: false
            })
        case RECEIVE_INSERT_USER_CURRENCY:
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                lastUpdated: action.receivedAt
            })
        case FAILURE_INSERT_USER_CURRENCY:
            return Object.assign({}, state, {
                error: true
            })
        default:
            return state
    }
}

export function buyUserCurrency(
    state = {
        isFetching: false,
        error: false
    },
    action
) {
    switch (action.type) {
        case REQUEST_BUY_USER_CURRENCY:
            return Object.assign({}, state, {
                isFetching: true,
                error: false
            })
        case RECEIVE_BUY_USER_CURRENCY:
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                lastUpdated: action.receivedAt
            })
        case FAILURE_BUY_USER_CURRENCY:
            return Object.assign({}, state, {
                error: true
            })
        default:
            return state
    }
}

export function sellUserCurrency(
    state = {
        isFetching: false,
        error: false
    },
    action
) {
    switch (action.type) {
        case REQUEST_SELL_USER_CURRENCY:
            return Object.assign({}, state, {
                isFetching: true,
                error: false
            })
        case RECEIVE_SELL_USER_CURRENCY:
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                lastUpdated: action.receivedAt
            })
        case FAILURE_SELL_USER_CURRENCY:
            return Object.assign({}, state, {
                error: true
            })
        default:
            return state
    }
}