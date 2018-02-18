import {
    REQUEST_USER,
    RECEIVE_USER,
    FAILURE_USER
} from '../constants/users.constants'
import { getUser } from '../../services/users.service'

function requestGetUser(username) {
    return {
        type: REQUEST_USER,
        payload: username
    }
}

function receiveUser(username, json) {
    return {
        type: RECEIVE_USER,
        username,
        payload: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function receiveErrorResponse(username, error) {
    return {
        type: FAILURE_USER,
        username,
        payload: error,
        receivedAt: Date.now()
    }
}

export function getUser(username) {
    return dispatch => {
        dispatch(requestGetUser(username))
        return removeUser(username)
            .then(response => response.json())
            .then(dispatch(receiveUser(json)))
            .catch((error) => {
                dispatch(receiveErrorResponse(username, error.message))
            })
    }
}