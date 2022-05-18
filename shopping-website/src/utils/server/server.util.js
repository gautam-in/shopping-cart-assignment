export const fetchBannerData = async () => {
    const bannerData = await fetch(process.env.REACT_APP_API_URL + '/banners').then((res) => res.json()).then((result) => result)
    return bannerData;
}

export const fetchCategoryData = async () => {
    const categoryData = await fetch(process.env.REACT_APP_API_URL + '/categories').then((res) => res.json()).then((result) => result)
    return categoryData;
}

export const fetchProductData = async () => {
    const productData = await fetch(process.env.REACT_APP_API_URL + '/products').then((res) => res.json())
    return productData;
}

export const addToCartServer = async (product) => {
    const result = await fetch(process.env.REACT_APP_API_URL + '/addToCart',{
        method:'POST',
        body: {
            productId: product.id
        }
    }).then(res => res.json()).catch(error => error);
    return result;
}