import axios from "axios"
import { useQuery } from "react-query"

export const useProducts = () => {
    return useQuery('PRODUCTS', async () => {
        let res = await axios.get('/products')
        return res.data
    })
}

export const useCategories = () => {
    return useQuery('CATEGORIES', async () => {
        let res = await axios.get('/categories')
        return res.data
    })
}

export const useBanners = () => {
    return useQuery('BANNERS', async () => {
        let res = await axios.get('/banners')
        return res.data
    })
}