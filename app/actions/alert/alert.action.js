import {
    ALERT_SUCCESS,
    ALERT_ERROR,
    ALERT_CLEAR
} from '../../constants/alert.constants.js'

export function success(message) {
    return {
        type: ALERT_SUCCESS,
        message
    }
}

export function error(message) {
    return {
        type: ALERT_ERROR,
        message
    }
}

export function clear() {
    return {
        type: ALERT_CLEAR
    }
}