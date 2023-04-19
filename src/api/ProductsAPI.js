import { api } from "./config"

export const ProductsAPI = {
    getBanner: async function () {
        const response = await api.request({
            url: `/banners`,
            method: "GET",
        });

        return response.data;
    },
    getCategories: async function() {
        const response = await api.request({
            url: `/categories`,
            method: "GET",
        });

        const formattedCategories = response.data.sort((a, b) => a.order - b.order).filter(item => item.order !== -1);

        return formattedCategories;
    },
    getProducts: async function () {
        const response = await api.request({
            url: `/products`,
            method: "GET",
        });

        return response.data;
    },
}
