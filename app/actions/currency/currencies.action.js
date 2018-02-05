import {
    REQUEST_CURRENCIES,
    RECEIVE_CURRENCIES,
    FAILURE_CURRENCIES
} from '../../constants/currencies.constants'
import * as currenciesService from '../../services/currencies.service.js'

function requestCurrencies() {
  return {
    type: REQUEST_CURRENCIES
  }
}

function receiveCurrencies(json) {
  console.log(json);

  return {
    type: RECEIVE_CURRENCIES,
    currencies: json,
    receivedAt: Date.now()
  }
}

export function fetchCurrencies() {
  return dispatch => {
    currenciesService.fetchCurrencies()
    .then(
        json => dispatch(receiveCurrencies(json))
    );
  }
}