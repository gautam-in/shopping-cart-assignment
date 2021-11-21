export function cartReducer(state = { cartItems: [], totalItems: 0, totalValue: 0, toggleModal: false }, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const { id, name, price, imageURL } = action.payload;
            const item = state.cartItems.filter(item => (item.id == id));
            console.log('reached')
            if (item.length > 0) {
                const updatedCart = state.cartItems.map(item => {
                    if (item.id == id) {
                        item.quantity += 1;
                    }
                    return item
                })
                
                return {totalItems:state.totalItems+1,totalValue:state.totalValue+price,cartItems:updatedCart,toggleModal:false};

            } else {
                return {
                    cartItems: [...state.cartItems, { id, name, price, imageURL, quantity: 1 }],
                    totalItems: state.totalItems + 1,
                    totalValue: state.totalValue + price,
                    toggleModal: false
                }
            }
            break;
        case "DECREASE_QUANTITY":
            
            
            let notZero=true;
            let ItemPrice=0;
            const updatedCart= state.cartItems.map(item=>{
                if(item.id==action.id){
                    if(item.quantity==1){   
                        notZero=false;
                    }
                    ItemPrice=item.price;
                    item.quantity-=1;
                    
                }
                return item;
            })
            if(!notZero){
                const items = state.cartItems.filter(item => (item.id != action.id));
                return {
                    cartItems: items,
                    totalItems: state.totalItems - 1,
                    totalValue: state.totalValue - ItemPrice,
                    toggleModal: true
                }
            }
            return {
                cartItems: updatedCart,
                totalItems: state.totalItems - 1,
                totalValue: state.totalValue - ItemPrice,
                toggleModal: true
            }
            
            
            
            break;

        case "INCREASE_QUANTITY":
            let ItemPrice1=0;
            const updatedCart1= state.cartItems.map(item=>{
                if(item.id==action.id){
                   
                    ItemPrice1=item.price;
                    item.quantity+=1;
                    
                }
                return item;
            })
            return {
                cartItems: updatedCart1,
                totalItems: state.totalItems + 1,
                totalValue: state.totalValue + ItemPrice1,
                toggleModal: true
            }

            
            break;
        case "TOGGLEMODAL":
            return {
                ...state, toggleModal: !state.toggleModal
            }
        default:
            return state;
    }
}