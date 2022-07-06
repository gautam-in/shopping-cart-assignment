import axios from "axios";
import { BASE_URL } from "../store/url/api";

export const getBannerData = async () => {
    try {
        return await axios.get(`${BASE_URL}/banners`);
    } catch (e) {
        return [];
    }
};

export const getCategories = async () =>{
    try {
        return await axios.get(`${BASE_URL}/categories`);
    } catch (e) {
        return [];
    }
}