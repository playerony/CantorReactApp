import fetch from 'cross-fetch'

let apiUrl = 'http://localhost:8000/cantor/userCurrency'

export function getUserCurrency(userCurrencyid) {
  return fetch(apiUrl + '/' + userCurrencyid)
    .then(response => {
      return response.json()
    })
}

export function getUserCurrencies(userid) {
    return fetch(apiUrl + '/all/' + userId)
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

export function buyCurrency(userCurrencyId, userCurrencyAmount) {
  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userCurrencyId: userCurrencyId,
      currencyAmount: currencyAmount
    })
  }
  
  return fetch(apiUrl + '/buy', requestOptions)
    .then(response => {
      return response.json()
    })
}

export function sellCurrency(userCurrencyId, userCurrencyAmount) {
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userCurrencyId: userCurrencyId,
        currencyAmount: currencyAmount
      })
    }
    
    return fetch(apiUrl + '/sell', requestOptions)
      .then(response => {
        return response.json()
      })
  }