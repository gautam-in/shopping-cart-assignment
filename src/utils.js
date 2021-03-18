// import constants from './constants';
export const commonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
};
export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

export function getViewPortDimensions(){
    return {width: window.innerWidth,height:window.innerHeight};
}

export function validEmail(email){
    let valid = false;
    const emailValidRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if(email){
        valid = emailValidRegex.test(email);
    }
    return valid;

}

export function validPwd(pwd){
    let valid = false;
    const pwdValidRegex = /^((?!.*[\s])(?=.*[A-Z])(?=.*\d).{6,})$/i; //must have 6 chars and alphabet and numberic and no spaces
    if(pwd){
        valid = pwdValidRegex.test(pwd);
    }
    return valid;
}