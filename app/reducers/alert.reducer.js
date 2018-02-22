import {
    ALERT_SUCCESS,
    ALERT_ERROR,
    ALERT_CLEAR
} from '../constants/alert.constants.js'

export function alert(state = {}, action) {
    switch(action.type) {
        case ALERT_SUCCESS: 
            return {
                type: ALERT_SUCCESS,
                message: action.message
            }
        case ALERT_ERROR: 
            return {
                type: ALERT_ERROR,
                message: action.message
            }
        case ALERT_CLEAR: 
            return {}
        default:
            return state
    }
}