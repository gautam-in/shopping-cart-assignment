import axios from "axios"

export const getCategories = async () => {
    let result = await axios.get(`http://localhost:5000/categories`)
    let products=(result.data.sort((a, b) => {
        if (a.order < b.order) return -1
        else if (a.order > b.order) return 1
        return 0
    }))
    return products
}
export const getBanners = async () => {
    let res = await axios.get(`http://localhost:5000/banners`)
    return res
    
}

export  const getProducts = async () => {
    let res = await axios.get('http://localhost:5000/products')
   return res
}