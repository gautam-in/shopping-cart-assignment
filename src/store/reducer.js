import get from "lodash/get";
import { SET_FILTER,DECREAMENT,INCREAMENT,LOGIN,ADD_USER } from "./action";

const appState = {
    filter: null,
    item:0,
    cartItems:[],
    isLogin: false,
    user:[]
}

const reducer = (state = appState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_FILTER:
            return {
                ...state,
                filter: payload,
            };
        case INCREAMENT:
                if(state.cartItems.find((element) => element.id === get(payload,"id"))){
                    return{
                        ...state,
                        item:state.item + 1,
                        cartItems:state.cartItems.map(item=>{
                            if(item.id === get(payload,"id")){
                                return{...item,qty:item.qty+1};    
                            }
                            return item;
                        })
                    };
                }
                else{
                    return{
                ...state,
                item: state.item + 1,
                cartItems: state.cartItems.concat({ ...payload, qty: 1 })
                    }
                } 
        case DECREAMENT:
            const Items = state.cartItems.find((element)=>element.id === get(payload,"id"));
            console.log(Items);
            if(Items){
                if(Items.qty>1){
                    return {
                        ...state,
                        item:state.item-1,
                        cartItems:state.cartItems.map(item=>{
                            if(item.id === get(payload,"id")){
                                return{...item,qty:item.qty-1};    
                            }
                            return item;
                        })
                    };
                }else{
                    return {
                        ...state,
                        item: state.item - 1,
                        cartItems: state.cartItems.filter((ele) => ele.id !== get(payload, "id")),
                      };
                    }
            }else{
                console.log("Item cannot be identified !");
                return { ...state };
            }
        case LOGIN :
            return {...state, isLogin: payload};
        case ADD_USER:
            return {...state,
                    user: payload};
        default:
            return appState;
    }
}

export default reducer;