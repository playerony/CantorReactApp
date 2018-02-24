import {
    REQUEST_USER,
    RECEIVE_USER,
    FAILURE_USER
} from '../../constants/users.constants.js'
import { getUser } from '../../services/users.service'
import * as alertActions from '../../actions/alert/alert.action.js'

function requestUser(userId) {
    return {
        type: REQUEST_USER,
        userId
    }
}

function receiveUser(userId, json) {
    return {
        type: RECEIVE_USER,
        userId,
        response: json,
        receivedAt: Date.now()
    }
}

function failureUser(userId, error) {
    return {
        type: FAILURE_USER,
        userId,
        error: error
    }
}

export function fetchUser(userId) {
    return dispatch => {
        dispatch(requestUser(userId))
        return getUser(userId)
            .then(
                json => {
                    dispatch(receiveUser(userId, json))
                    dispatch(alertActions.success("Successful fetched user"))
                }
            )
            .catch(function(error) {
                dispatch(failureUser(userId, error))
                dispatch(alertActions.error("Some problems by fetching user"))
            })
    }
}