import {
    REQUEST_INSERT_USER,
    RECEIVE_INSERT_USER,
    FAILURE_INSERT_USER
} from '../../constants/users.constants.js'
import { saveUser } from '../../services/users.service'
import * as alertActions from '../../actions/alert/alert.action.js'

function requestInsertUser(userCurrency) {
    return {
        type: REQUEST_INSERT_USER,
        userCurrency
    }
}

function receiveInsertUser(json) {
    return {
        type: RECEIVE_INSERT_USER,
        response: json,
        receivedAt: Date.now()
    }
}

function failureInsertUser(error) {
    return {
        type: FAILURE_INSERT_USER,
        error: error
    }
}

export function insertUser(userCurrency) {
    return dispatch => {
        dispatch(requestInsertUser(userCurrency))
        saveUser(userCurrency)
            .then(
                json => {
                    dispatch(receiveInsertUser(json))
                    dispatch(alertActions.success("Successful added a new user"))
                }
            )
            .catch(function(error) {
                dispatch(failureInsertUser(error))
                dispatch(alertActions.error("Some problems by adding new user"))
            })
    }
}