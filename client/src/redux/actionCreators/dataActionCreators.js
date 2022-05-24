import {createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';

export const getBanners = createAsyncThunk(
    'data/getBanners',
    async () =>{
        const res = await axios.get('http://localhost:5000/banner');
        return res.data;
    }
);


export const getCategories = createAsyncThunk(
    'data/getCategories',
    async () =>{
            const res = await axios.get('http://localhost:5000/categories');
            return res.data;
    }
);


export const getProducts = createAsyncThunk(
    'data/getProducts',
    async () =>{
            const res = await axios.get('http://localhost:5000/products');
            return res.data;
    }
)