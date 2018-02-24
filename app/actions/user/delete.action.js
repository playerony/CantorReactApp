import {
    REQUEST_DELETE_USER,
    RECEIVE_DELETE_USER,
    FAILURE_DELETE_USER
} from '../../constants/users.constants.js'
import { removeUser } from '../../services/users.service'
import * as alertActions from '../../actions/alert/alert.action.js'

function requestDeleteUser(userId) {
    return {
        type: REQUEST_DELETE_USER,
        userId
    }
}

function receiveDeleteUser(userId) {
    return {
        type: RECEIVE_DELETE_USER,
        userId,
        receivedAt: Date.now()
    }
}

function failureDeleteUser(userId, error) {
    return {
        type: FAILURE_DELETE_USER,
        userId,
        error: error,
    }
}

export function deleteUser(userId) {
    return dispatch => {
        dispatch(requestDeleteUser(userId))
        return removeUser(userId)
            .then(
                json => {
                    dispatch(receiveDeleteUser(userId, json))
                    dispatch(alertActions.success("Successful deleted user"))
                }
            )
            .catch(function(error) {
                dispatch(failureDeleteUser(userId, error))
                dispatch(alertActions.error("Some problems by deleting user"))
            })
    }
}