import {
    REQUEST_CURRENCIES,
    RECEIVE_CURRENCIES,
    FAILURE_CURRENCIES
} from '../constants/currencies.constants'

export function fetchCurrencies(
  state = {
    isFetching: false,
    error: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CURRENCIES:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      })
    case RECEIVE_CURRENCIES:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        items: action.currencies,
        lastUpdated: action.receivedAt
      })
    case FAILURE_CURRENCIES:
      return Object.assign({}, state, {
        error: true
      })
    default:
      return state
  }
}