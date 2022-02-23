
import axios from 'axios';

const baseURL = "http://localhost:3000/"
const MediaURL = "http://localhost:3000"
const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {},
});

async function getMethod(endpoint, params = {}) {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: endpoint,
            params: params
        };
        axiosInstance(config).then(response => {
            resolve(response.data)
        }, error => {
            reject(error.response.data);
        })
    })
}

function postMethod(endpoint, data, params = {}) {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'post',
            url: 'api/v1/' + endpoint,
            data: data,
            params: params
        };
        axiosInstance(config).then(response => {
            resolve(response.data)
        }, error => {
            reject(error.response.data);
        })
    })
};



export { getMethod, postMethod, MediaURL };
