import fetch from 'cross-fetch'

let apiUrl = 'http://webtask.future-processing.com:8068'

export function fetchCurrencies() {
    const requestOptions = {
        method: 'GET'
    }

    return fetch(apiUrl + '/currencies', requestOptions)
        .then(response => {
            return response.json()
        })
}