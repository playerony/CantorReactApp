import fetch from 'cross-fetch'

let apiUrl = 'http://localhost:8080/cantor/userCurrency'

export function getUserCurrency(userCurrencyId) {
    return fetch(apiUrl + '/' + userCurrencyId)
        .then(response => {
            return response.json()
        })
}

export function getUserCurrencies(userId) {
    const requestOptions = {
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return fetch(apiUrl + '/all/' + userId, requestOptions)
        .then(response => {
            return response.json()
        })
}

export function saveUserCurrency(userCurrency) {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userCurrencyId: userCurrency.userCurrencyId,
            userId: userCurrency.userId,
            currencyCode: userCurrency.currencyCode,
            currencyAmount: userCurrency.currencyAmount
        })
    }

    return fetch(apiUrl, requestOptions)
        .then(response => {
            return response.json()
        })
}

export function buyCurrency(userCurrency) {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userCurrencyId: userCurrency.userCurrencyId,
            currencyAmount: userCurrency.currencyAmount
        }) 
    }
    
    return fetch(apiUrl + '/buy', requestOptions)
        .then(response => {
            return response.json()
        })
}

export function sellCurrency(userCurrency) {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userCurrencyId: userCurrency.userCurrencyId,
            currencyAmount: userCurrency.currencyAmount
        })
    }
    
    return fetch(apiUrl + '/sell', requestOptions)
        .then(response => {
            return response.json()
        })
  }