import jwtDecode from 'jwt-decode'

import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    FAILURE_LOGIN,
    LOGOUT
} from '../../constants/login.constants.js'
import * as loginService from '../../services/login.service.js'

function requestLogin(username) {
    return {
        type: REQUEST_LOGIN,
        username
    }
}

function receiveLogin(username, json) {
    return {
        type: RECEIVE_LOGIN,
        username,
        payload: jwtDecode(json.token),
        receivedAt: Date.now()
    }
}

function failureLogin(error) {
    return {
        type: FAILURE_LOGIN,
        message: error.message,
        payload: null,
        receivedAt: Date.now()
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function login(username, password) {
    return dispatch => {
        dispatch(requestLogin(username))
        loginService.getToken(username, password)
            .then(
                json => dispatch(receiveLogin(username, json))
            )
            .catch(function(error) {
                dispatch(failureLogin(error))
            })
    }
}