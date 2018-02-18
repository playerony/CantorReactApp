import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    FAILURE_LOGIN,
    LOGOUT
} from '../constants/login.constants.js'

export function login(
    state = {
        isFetching: false,
        error: false,
        isAuthenticated: false,
        payload: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                error: false
            })
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                isAuthenticated: true,
                payload: action.payload,
                lastUpdated: action.receivedAt
            })
        case FAILURE_LOGIN:
            return Object.assign({}, state, {
                error: true,
                isFetching: false,
                isAuthenticated: false,
                message: action.message
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