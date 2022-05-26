
const API_DOMAIN = 'http://localhost:5001'

export const API_URL ={
    fetchBanners: `/banners`,
    fetchProducts: '/products',
    fetchCategories: '/categories',
    addToCart: '/addToCart'
}

export const getUrl = (path) =>{
    return API_DOMAIN + path
}