import { request } from '../request';
import { BANNERS, CATEGORIES, PRODUCTS } from '../constants/endpoints';

export interface Banner {
    bannerImageAlt: string;
    bannerImageUrl: string;
    id: string;
    isActive: boolean;
    order: number;
}

export interface Category {
   name: string;
    key: string;
    description: string;
    enabled: boolean;
    order: number;
    imageUrl: string;
    id: string;  
}

export interface Product {
    name: string,
    imageURL: string,
    description: string,
    price: number,
    stock: number,
    category: string,
    sku: string,
    id: string,
}

const GET_BANNERS_ENDPOINT = `${process.env.REACT_APP_SERVER_URL}${BANNERS}`;
const GET_CATEGORIES_ENDPOINT = `${process.env.REACT_APP_SERVER_URL}${CATEGORIES}`;
const GET_PRODUCTS_ENDPOINT = `${process.env.REACT_APP_SERVER_URL}${PRODUCTS}`;

export const getBanners = async (): Promise<Banner[]> => {
    const data = (await request.get(GET_BANNERS_ENDPOINT)) as Banner[];
    return data || [];
};

export const getCategories = async (): Promise<Category[]> => {
    const data = (await request.get(GET_CATEGORIES_ENDPOINT)) as Category[];
    return data || [];
};

export const getProducts = async (): Promise<Product[]> => {
    const data = (await request.get(GET_PRODUCTS_ENDPOINT)) as Product[];
    return data || [];
};
