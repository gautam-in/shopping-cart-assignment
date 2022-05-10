import {handleError} from './index';

class Http {
    static get(endpoint) {
        try {
            return fetch(endpoint).then(stream => stream.json()).then(response => response);
        }
        catch(error) {
            handleError(error);
        }
    };

    static post(endpoint, body) {
        try {
            return fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch(error) {
            handleError(error);
        }
    };
};
export default Http;