import axios from "axios";
import * as Constants from '../global-constants';
import {
    SET_CATEGORIES, SET_BANNERS, SET_PRODUCTS, SET_CART,
    SET_LOGIN_STATUS, SET_CART_STATUS, SET_REGISTER_STATUS, SET_SELECTED_CATEGORY
} from './types';

export const setBanners = (banner) => {
    if(banner && banner.length > 0) {
        banner.sort((banner1, banner2) => banner1.order - banner2.order);
    }
    return { type: SET_BANNERS, payload: banner };
}

export const setCategories = (cate) => {
    if(cate && cate.length > 0) {
        cate = cate.filter((category) => category.enabled)
        cate.sort((cate1, cate2) => cate1.order - cate2.order);
    }
    return { type: SET_CATEGORIES, payload: cate };
}

const config = {
    headers: {
        'Accept': 'application/json'
    }
}

export const fetchData = (url) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(Constants.UrlServer + url, config);
            switch (url) {
                case Constants.UrlBannersApi: dispatch(setBanners(response.data)); break;
                case Constants.UrlCategoriesApi: dispatch(setCategories(response.data)); break;
                // case Constants.UrlProductsApi: dispatch(setProducts(response.data)); break;
                // case Constants.UrlCartApi: dispatch(setCart(response.data)); break;
                default: break;
            }
        }
        catch (error) {
            throw (error)
        }
    }
}