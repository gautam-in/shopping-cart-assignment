export const getBannerData = () => {
    return {
        type: "GETDATA",
    };
};

export const getCategories = () => {
    return{
        type: "GETCATEGORIES"
    }
}

export const getProductDetails = () => {
    return{
        type: "GETPRODUCTDETAILS"
    }
}

export const filterCategory = (data) => {
    return{
        type: "STORECATEGORYID",
        data
    }
}

export const setShowCart = (data) => {
    return{
        type:"SETSHOWCART",
        data
    }
}

export const addToCart = (data) => {
    console.log({data}, 'action');
    return{
        type: "SETCARTLIST",
        data
    }
}

export const changeCartItems = (data) => {
    console.log({data}, 'action changeCartItems');
    return{
        type: "CHANGECARTITEM",
        data
    }
}