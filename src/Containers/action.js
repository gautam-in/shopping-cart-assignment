export const getBannerData = () => {
    console.log('in action')
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
    console.log(data, 'action');
    return{
        type: "STORECATEGORYID",
        data
    }
}