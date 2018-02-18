import fetch from 'cross-fetch'

let apiUrl = 'http://localhost:8080/api'

export function getToken(username, password) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    return fetch(apiUrl + '/getToken' , requestOptions)
        .then(response => {
            return response.json()
        })
}