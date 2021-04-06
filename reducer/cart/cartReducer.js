import * as types  from "../../constants/actionTypes";

const initialState ={
    cartData:[],
    isCartOpen:false
}
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_CART:
            return{
                ...state,
                isCartOpen:!state.isCartOpen
            }
        case types.ADD_ITEM_TO_CART: 
        const currentCartData = state?.cartData;
        const itemAlreadyInCart = currentCartData&&currentCartData.length ? 
        currentCartData.findIndex((product)=>product.id  === action.item.id):-1
        //increasing the count of items in cart
        if (itemAlreadyInCart>= 0) {
            return Object.assign({}, state, {
                cartData:Object.assign([],
                                state.cartData,{
                [itemAlreadyInCart]:Object.assign({},
                                state.cartData[itemAlreadyInCart],{
                count :currentCartData?.[itemAlreadyInCart]?.count + 1
                        })
                  })
            })
            }
            return Object.assign({}, state, {
                        cartData:currentCartData?currentCartData.concat(action.item):[].concat(action.item)
            });

          case types.DECREMENT_ITEM_COUNT: 
          const cartData = state?.cartData;
          const itemInCart = cartData&&cartData.length && 
          cartData.findIndex((product)=>product.id  === action.item.id)
          const item = cartData?.[itemInCart]
          //decreasing the count of items in cart
              return Object.assign({}, state, {
                      cartData:Object.assign([],
                                      state.cartData,{
                      [itemInCart]:Object.assign({},state.cartData[itemInCart],{
                      count :item?.count - 1
                              })
                        })
                        
                  })
        case types.REMOVE_ITEM_FROM_CART: 
        const allItemsInCart= JSON.parse(JSON.stringify(state?.cartData));
        const itemToBeRemoved = allItemsInCart&&allItemsInCart.length&&allItemsInCart.findIndex((product)=>product.id  === action.item.id)

        allItemsInCart.splice(itemToBeRemoved,1)

        //remove item from cart
            return Object.assign({}, state, {
                    cartData:state?.cartData?.length ?allItemsInCart :[]
                })
        default:
            return state
    }
};
export default reducer
