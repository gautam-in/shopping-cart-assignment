const API_BASE_URL = 'http://localhost:5000'

const appDefaults = {
    api: {
        getBanners: API_BASE_URL + '/banners', 
        getCategories: API_BASE_URL + '/categories', 
        getProducts: API_BASE_URL + '/products', 
        addToCart: API_BASE_URL + '/addToCart', 
    },
}

export default appDefaults