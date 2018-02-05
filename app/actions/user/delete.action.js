import {
  REQUEST_DELETE_USER,
  RECEIVE_DELETE_USER,
  FAILURE_DELETE_USER
} from '../constants/users.constants'
import { removeUser } from '../../services/users.service'

function requestDeleteUser(userId) {
  return {
    type: REQUEST_DELETE_USER,
    payload: userId
  }
}

function receiveSuccessResponse(userId) {
  return {
    type: RECEIVE_DELETE_USER,
    userId,
    payload: 'success',
    receivedAt: Date.now()
  }
}

function receiveErrorResponse(userId, error) {
  return {
    type: FAILURE_DELETE_USER,
    userId,
    payload: error,
    receivedAt: Date.now()
  }
}

export function deleteUser(userId) {
  return dispatch => {
    dispatch(requestDeleteUser(userId))
    return removeUser(userId)
      .then(response => response.json())
      .then(dispatch(receiveSuccessResponse(userId)))
      .catch((error) => {
        dispatch(receiveErrorResponse(error.message))
      })
  }
}