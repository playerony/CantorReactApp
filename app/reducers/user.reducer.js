import {
    REQUEST_INSERT_USER,
    REQUEST_UPDATE_USER,
    REQUEST_DELETE_USER,
    REQUEST_USER,

    RECEIVE_INSERT_USER,
    RECEIVE_UPDATE_USER,
    RECEIVE_DELETE_USER,
    RECEIVE_USER,

    FAILURE_INSERT_USER,
    FAILURE_UPDATE_USER,
    FAILURE_DELETE_USER,
    FAILURE_USER
} from '../constants/users.constants'

export function fetchUser(
    state = {
        isFetching: false,
        isError: false,
        isRegistered: false,
        payload: null
    },
    action
) {
    switch (action.type) {
        case REQUEST_USER:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false
            })
        case RECEIVE_USER:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                payload: action.response,
                isRegistered: true,
                lastUpdated: action.receivedAt
            })
        case FAILURE_USER:
            return Object.assign({}, state, {
                isError: true,
                isFetching: true,
                error: action.error
            })
        default:
            return state
    }
}

export function insertUser(
    state = {
        isFetching: false,
        isError: false
    },
    action
) {
    switch (action.type) {
        case REQUEST_INSERT_USER:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false
            })
        case RECEIVE_INSERT_USER:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                lastUpdated: action.receivedAt
            })
        case FAILURE_INSERT_USER:
            return Object.assign({}, state, {
                isError: true,
                isFetching: true,
                error: action.error
            })
        default:
            return state
    }
}

export function updateUser(
    state = {
        isFetching: false,
        isError: false
    },
    action
) {
    switch (action.type) {
        case REQUEST_UPDATE_USER:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false
            })
        case RECEIVE_UPDATE_USER:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                lastUpdated: action.receivedAt
            })
        case FAILURE_UPDATE_USER:
            return Object.assign({}, state, {
                isError: true,
                isFetching: true,
                error: action.error
            })
        default:
            return state
    }
}

export function deleteUser(
    state = {
        isFetching: false,
        isError: false
    },
    action
) {
    switch (action.type) {
        case REQUEST_DELETE_USER:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false
            })
        case RECEIVE_DELETE_USER:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                lastUpdated: action.receivedAt
            })
        case FAILURE_DELETE_USER:
            return Object.assign({}, state, {
                isError: true,
                isFetching: true,
                error: action.error
            })
        default:
            return state
    }
}