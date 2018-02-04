import fetch from 'cross-fetch'

let apiUrl = 'http://localhost:8000/user'

export function removeUser(id) {
  return fetch(apiUrl + '/remove/' + id)
    .then(response => {
      return response.json()
    })
}

export function saveUser(user) {
  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
      email: user.email,
      balance: user.balance,
      roleId: user.roleId
    })
  }

  return fetch(apiUrl + '/save', requestOptions)
    .then(response => {
      return response.json()
    })
}

export function getUser(username) {
  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username
    })
  }
  
  return fetch(apiUrl + '/get', requestOptions)
    .then(response => {
      return response.json()
    })
}