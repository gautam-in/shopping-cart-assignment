export function getUserOnLogin(email) {
    return {
        type : 'GET_USER_ON_LOGIN',
        payload : {
            email
        }
    }
}

export function addUserOnRegister(user) {
    return {
        type : 'ADD_UESR_ON_REGISTER',
        payload : {
            newUser: user
        }
    }
}