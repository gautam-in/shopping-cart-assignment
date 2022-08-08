import API from "../api"
import { Action } from "../api/action"

const api = new API([])

export const getBanners = async () => {
    return await api.get(Action.banners)
}

export const getCategories = async () => {
    return await api.get(Action.categories)
}

export const getProducts = async () => {
    return await api.get(Action.products)
}

export const addToCart = async (id) => {
    return await api.post(Action.buyNow, id)
}

