export function checkToken(token) {
    let dateNow = new Date()

    if(token != undefined && token.exp < dateNow.getTime() / 1000)
        return true
    return false
}