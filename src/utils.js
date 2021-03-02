import constants from './constants';
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