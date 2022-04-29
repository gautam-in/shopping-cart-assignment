import axios from 'axios'
import config from '../../config';

/*
 * json to URI
 * */
function jsonToURI (data) {
    return Object.keys(data)
        .map(value => encodeURIComponent(data[value]))
        .join('/')
}

// calling api
export function httpRequest (
    URL,
    method,
    data = '',
    headersData = {},
    _skipDefaultHeaders = false
) {
    // Set config defaults when creating the instance
    const instance = axios.create({
        baseURL: config.apiGateway.baseURL,
        headers: headersData
    })

    var request;
    if (method === 'GET') {
        request = instance.get(URL, {
            params: data
        })
    } else if (method === 'POST') {
        request = instance.post(URL, data)
    } else if (method === 'PUT') {
        request = instance.put(URL, data)
    } else if (method === 'PATCH') {
        request = instance.patch(URL, data)
    } else if (method === 'DELETE') {
        data = jsonToURI(data)
        request = instance.delete(URL + data)
    }
    return request;
}

/*
axios.interceptors.request.use(
    function(config) {
        const token = getTokenFromLocalDB("token");

        if (token != null) {
            config.headers.Authorization = `${token}`;
        }

        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);
*/
