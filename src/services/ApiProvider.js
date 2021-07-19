import React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
// react-query fetch with axios

const BASE_URL = 'http://localhost:5000';

export const fetchAPI = (resource) =>{
    console.log(resource,"res")
  const { isLoading, error, data } = useQuery('fetchLuke', () =>
  axios(`${BASE_URL}/${resource}`));
    if(isLoading){
        return {data};
    }else{
        return {data:null,
            error
        };
    }
}


export const getBanners = () => {
    const {data} = fetchAPI('banners');
    return data;
}

export const getCategories = () => {
    const {data} = fetchAPI('categories');
    return data;
}

export const getProducts = () => {
    const {data} = fetchAPI('products');
    return data;
}