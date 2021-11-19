export function getUserOnLogin(email) {
    return {
        type : 'GET_USER_ON_LOGIN',
        payload : {
            email
        }
    }
}