import {
    REQUEST_USER,
    RECEIVE_USER,
    FAILURE_USER
} from '../constants/users.constants'
import { getUser } from '../../services/users.service'
import * as alertActions from '../../actions/alert/alert.action.js'

function requestUser(username) {
    return {
        type: REQUEST_USER,
        username
    }
}

function receiveUser(username, json) {
    return {
        type: RECEIVE_USER,
        username,
        response: json,
        receivedAt: Date.now()
    }
}

function failureUser(username, error) {
    return {
        type: FAILURE_USER,
        username,
        error: error
    }
}

export function getUser(username) {
    return dispatch => {
        dispatch(requestUser(username))
        return getUser(username)
            .then(
                json => {
                    dispatch(receiveUser(username, json))
                    dispatch(alertActions.success("Successful fetched user"))
                }
            )
            .catch(function(error) {
                dispatch(failureUser(username, error))
                dispatch(alertActions.error("Some problems by fetching user"))
            })
    }
}