import { deepCopy } from "../../Utils";


const getCartCount=(cartItems)=>{
    return cartItems.reduce((total,item)=>total+=item.qty,0);
}

const getCartTotal=(cartItems)=>{
    return cartItems.reduce((total,item)=>total+=(item.qty*item.price),0);
}

const savedCartItems=(cartItems)=>{
    if(cartItems){
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    }
   let saved=JSON.parse(localStorage.getItem("cartItems")) || [];
   return {cartItems:saved,cartTotal:getCartTotal(saved),cartCount:getCartCount(saved)};
}

export const cartState={
    cartTotal:0,
    ...savedCartItems(),
    isCartOpen:false,
}

export const addItem=(cart,product,add)=>{
    let cartItems=deepCopy(cart.cartItems);
    let ix=cartItems.findIndex(item=>item.id===product.id);
    if(ix>-1){
        if(add){
            cartItems[ix].qty+=1;
        }else{
            cartItems[ix].qty-=1;
        }

        if(cartItems[ix].qty<=0){
            cartItems.splice(ix,1);
        }

    }else{
        product.qty=1;
        cartItems=[...cartItems,product];
    }
    savedCartItems(cartItems);

    let cartCount=getCartCount(cartItems);
    let cartTotal=getCartTotal(cartItems);
    return {cartItems,cartCount,cartTotal};
}

