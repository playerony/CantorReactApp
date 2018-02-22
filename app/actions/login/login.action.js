import jwtDecode from 'jwt-decode'

import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    FAILURE_LOGIN,
    LOGOUT
} from '../../constants/login.constants.js'
import * as alertActions from '../../actions/alert/alert.action.js'
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
        response: jwtDecode(json.token),
        receivedAt: Date.now()
    }
}

function failureLogin(error) {
    return {
        type: FAILURE_LOGIN,
        error: error
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
                json => {
                    dispatch(receiveLogin(username, json))
                    dispatch(alertActions.success("Successful login"))
                }
            )
            .catch(function(error) {
                dispatch(failureLogin(error))
                dispatch(alertActions.error("Some problems by login"))
            })
    }
}