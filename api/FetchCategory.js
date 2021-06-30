import { endpoint } from "../config"

const FetchCategory = async () => {
    const res = await fetch(`${endpoint}/categories`)
    const data = await res.json()
    return data;
}

const FetchProducts = async () => {
    const res = await fetch(`${endpoint}/products`)
    const data = await res.json()
    return data;
}

export {FetchCategory,FetchProducts}