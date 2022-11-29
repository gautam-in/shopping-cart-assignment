const InitialState = {
    bannerData: [],
    categories: [],
    ProductsList: [],
    categoryId: '',
    showCart: false,
    cartList: []
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
    case "SETSHOWCART":
        return {...state, showCart:action.data};
    case "STORECARTLIST":
        let CartList = state.cartList;
        const addedCartValue =[...CartList, action.cartValue];
        console.log({addedCartValue});
        return {...state, cartList:addedCartValue};
    case "CHANGECARTITEM":
        let CartListVal = state.cartList;
        let changeItemIndex = CartListVal.findIndex(ele => ele.id === action.data.id);
        if(changeItemIndex !== -1) CartListVal[changeItemIndex] = action.data;
        return {...state, cartList: CartListVal};
    default:
        return state;
    }
};

export default reducer;