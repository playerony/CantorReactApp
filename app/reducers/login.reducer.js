import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    FAILURE_LOGIN,
    LOGOUT
} from '../constants/login.constants.js'

export function login(
    state = {
        isFetching: false,
        isError: false,
        isAuthenticated: false,
        payload: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                isAuthenticated: true,
                payload: action.response,
                lastUpdated: action.receivedAt
            })
        case FAILURE_LOGIN:
            return Object.assign({}, state, {
                isError: true,
                error: action.error
            })
        case LOGOUT: 
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            })
            break;
        default:
            return state
    }
}