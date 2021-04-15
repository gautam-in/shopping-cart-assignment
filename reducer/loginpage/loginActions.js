export function registerUser(userData) {
    return dispatch => {
            dispatch({ type: 'REGISTER_USER', userEmail:userData.email });
        }
}
export function logIn(email) {
    return dispatch => {
            dispatch({ type: 'LOG_IN', email });
        }
}
export function logout() {
    return dispatch => {
            dispatch({ type: 'LOG_OUT'});
        }
}