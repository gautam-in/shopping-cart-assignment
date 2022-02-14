import axios from 'axios';
import config from '../config/config';

export const service = {
    get,
    post,
    put,
    deleteDetail
};


axios.defaults.baseURL = config.baseUrl;


function get(apiEndpoint, header=null){
    return axios.get(apiEndpoint, getOptions(header)).then((response)=>{
        return response;
    }).catch((err)=>{
        throw err;
    })
}

function post(apiEndpoint, payload, header=null){
    return axios.post( apiEndpoint, payload, getOptions(header)).then((response)=>{
        return response;
    }).catch((err)=>{
        throw err;
    })
}

function put(apiEndpoint, payload){
    return axios.put(apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        throw err;
    })
}

function deleteDetail(apiEndpoint){
    return axios.delete(apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        throw err;
    })
}

function getOptions(header=null){
    let options = {}; 
        options.headers = { 'Content-Type': "application/json"};
        if(header !== null) {
            let headers = {...options.headers}
            for(let i in header) {
                headers[i] = header[i];
            }
            options.headers = headers;
        }
    return options;
}