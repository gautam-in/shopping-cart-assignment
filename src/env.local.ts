const DOMAIN_NAME:string = "http://localhost:5500/server";
const ENV = {
    REACT_APP_SERVER_DOMAIN_NAME: DOMAIN_NAME,
    REACT_APP_BANNERS_LIST_API:`${DOMAIN_NAME}/banners/index.get.json`,
    REACT_APP_CATEGORIES_LIST_API:`${DOMAIN_NAME}/categories/index.get.json`,
    REACT_APP_PRODUCT_LIST_API:`${DOMAIN_NAME}/products/index.get.json`,
}

export default ENV;