import {
    REQUEST_UPDATE_USER,
    RECEIVE_UPDATE_USER,
    FAILURE_UPDATE_USER
} from '../../constants/users.constants.js'
import { updateUserAccount } from '../../services/users.service'
import { fetchUser } from '../../actions/user/get.action.js'
import * as alertActions from '../../actions/alert/alert.action.js'

function requestUpdateUser(user) {
    return {
        type: REQUEST_UPDATE_USER,
        user
    }
}

function receiveUpdateUser(json) {
    return {
        type: RECEIVE_UPDATE_USER,
        response: json,
        receivedAt: Date.now()
    }
}

function failureUpdateUser(error) {
    return {
        type: FAILURE_UPDATE_USER,
        error: error
    }
}

export function updateUser(user) {
    return dispatch => {
        dispatch(requestUpdateUser(user))
        updateUserAccount(user)
            .then(
                json => {
                    dispatch(receiveUpdateUser(json))
                    dispatch(fetchUser(user.userId))
                    dispatch(alertActions.success("Successful updated a user"))
                }
            )
            .catch(function(error) {
                dispatch(failureUpdateUser(error))
                dispatch(alertActions.error("Some problems by updating user"))
            })
    }
}