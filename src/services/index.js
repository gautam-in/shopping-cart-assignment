import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://localhost:5000'});

export const getData = async url => {
    const response = await axiosInstance.get(url);
    return response? response.data: [];
}

export const postData = async (url, data) => {
    const response = await axiosInstance.post(url, data);
    return response? response.data: [];
}