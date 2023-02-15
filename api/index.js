const api = {}
const headers = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}
api.$POST = async function (url, body) {
    const res = await fetch(`${URL}${url}`, {
        ...headers,
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(body), // body data type must match "Content-Type" header
    })
    const data = await res.json()
    return data
}
api.$GET = function (url, body = '') {
    fetch(`${URL}${url}`, {
        ...headers,
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(body), // body data type must match "Content-Type" header
    })
}

module.exports = api
