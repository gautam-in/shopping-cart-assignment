const InitialState = {
    bannerData: [],
    categories: [],
    ProductsList: [],
    categoryId: ''
};

const reducer = (state=InitialState, action) =>{
    switch (action.type){
    case "STOREBANNERDATA":
        return {...state, bannerData: action.bannerData.sort((a,b) => a.order - b.order)};
    case "STORECATEGORIES":
        return {...state, categories: action.data.sort((a,b) => a.order - b.order)};
    case "STOREPRODUCTDATA":
        return {...state, ProductsList: action.data};
    case "STORECATEGORYID":
        return {...state, categoryId: action.data};
    default:
        return state;
    }
};

export default reducer;