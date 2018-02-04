import fetch from 'cross-fetch'

let apiUrl = 'http://webtask.future-processing.com:8068'

export function fetchCurrencies() {
  return fetch(apiUrl + '/currencies')
    .then(response => {
      return response.json()
  })
}