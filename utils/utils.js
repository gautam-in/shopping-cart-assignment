import jsCookie from 'js-cookie';
import { mapArrayKey, isKeyExists } from '../lib/lib'

const addProductToCart = (product)=>{
    console.log("product",product)
    const cart = JSON.parse(jsCookie.get('cart'))
    console.log("cart",cart)
    const arrayWithKey = mapArrayKey(product)
    if(typeof cart !== "undefined"){
        cart.push(arrayWithKey)
        jsCookie.set('cart',JSON.stringify(cart))
    }else{
        jsCookie.set('cart',[arrayWithKey])
    }
}

const filterProduct = (cartData,newProduct,increment=false,decrement=false,newPrice=0)=>{
    let {id} = newProduct
    let exists = false;
        const match = cartData.map((row)=>{
            let price = row.price
            let quantity = row.quantity ? row.quantity : 1; 
            if(row.id === id){
                exists = true;
                if(decrement && !increment){
                    price = (quantity>1) ? price-newPrice : price; 
                    quantity = (quantity>1) ? quantity-1 : quantity;
                }else if(increment && !decrement){
                    price += newPrice
                    quantity += 1;
                }else{
                    price += newPrice
                    quantity += 1;
                }
                return {...row,newPrice:price,quantity};
            }else{
                return {...row,newPrice,quantity}
            }
        })

        if(!exists){
            match.push(newProduct)
        }
    return match;    
}

const removeFromCart = (arr,productId)=>{

    return arr.filter(function(row){ 
        let {id} = row
        return productId != id; 
    });

}

export {
    addProductToCart,filterProduct,removeFromCart
}