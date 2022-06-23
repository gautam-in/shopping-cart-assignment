const source = 'http://localhost:5000'

export const API_URL ={
    getBanners: `/banners`,
    getProducts: '/products',
    getCategories: '/categories',
    addToCart: '/addToCart'
}

export const getUrl = (path) =>{
    return source + path
}