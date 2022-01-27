import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://localhost:5000'});

const config = {
    headers: {
        "Content-Type": "text/plain",
    }
};

export const getData = async url => {
    const response = await axiosInstance.get(url);
    return response? response.data: [];
}

export const getDataById = async (url, id) => {
    const response = await axiosInstance.get(url);
    if(response) {
        const data = response.data.filter( item => item.category===id);
        return data;
    }
    return [];
}

export const postData = async (url, data) => {
    const response = await axiosInstance.post(url, data, config);
    return response? response.data: [];
}