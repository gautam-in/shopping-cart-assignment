import constants from './constants';
export const commonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'user-key': constants.zomatoPublicKey
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
export function debounce(func, wait, context) {
    let timeout, args, timestamp, result;

    let later = function() {
        let last = Date.now() - timestamp;
        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            result = func.apply(context, args);
            args = null;
        }
    };

    return function() {
        args = arguments;
        timestamp = Date.now();
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        return result;
    };
};

export const fetch_retry = async (fetch, retryAttempt, retryAfter) => {
    try {
        return await fetch();
    } catch (error) {
        if (retryAttempt <= 1) throw error;

        return await new Promise(resolve => {
            let timeout = retryAfter;

            if (timeout === undefined || timeout === null) {
                timeout = constants.FETCH_RETRY_TIMEOUT_IN_SECONDS;
            }

            setTimeout(resolve, timeout * 1000);
        }).then(() => {
            return fetch_retry(fetch, retryAttempt - 1, retryAfter);
        });
    }
};