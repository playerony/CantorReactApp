import fetch from 'cross-fetch'

let apiUrl = 'http://localhost:8080/cantor/user'

export function removeUser(id) {
    const requestOptions = {
        method: 'DELETE',
        mode: 'no-cors'
    }

    return fetch(apiUrl + '/' + id, requestOptions)
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
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email,
            balance: user.balance,
            roleId: user.roleId
        })
    }

    return fetch(apiUrl, requestOptions)
        .then(response => {
            return response.json()
        })
}

export function updateUserAccount(user) {
    const requestOptions = {
        method: 'PUT',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email,
            balance: user.balance,
            roleId: user.roleId
        })
    }

    return fetch(apiUrl + '/' + user.userId, requestOptions)
        .then(response => {
            return response.json()
        })
}

export function getUser(userId) {
    return fetch(apiUrl + '/' + userId)
        .then(response => {
            return response.json()
        })
}