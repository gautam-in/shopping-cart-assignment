import { createContext,useState } from "react";
const initialStore={
    count:0,
    cartList:[],
    updateCount:function(){},
    updateItemToCart:function(){},
    productIdsInCart:{},
    removeItemToCart:function(){}
}
const StoreContext=createContext(initialStore);
export function CommonStoreProvider(props) {
const [count,setCount]=useState(0);
const [cartList,setCartList]=useState([]);
const [productIdsInCart,setProductIdsInCart]=useState({});
const updateCount=(value)=>{
    setCount(value);
    }
const checkItemInCart=(id)=>{
    if(productIdsInCart[id]){
        return true;
    }
    return false;
}
const updateItemToCart=(productObj)=>{
    updateCount(count+1);
    let cartListing=[...cartList];
    let productIdsAddedObj={...productIdsInCart};
    if(checkItemInCart(productObj.id)){
        productIdsAddedObj[productObj.id]+=1;
    }else{
        productIdsAddedObj[productObj.id]=1;
        
        cartListing.push(productObj);
    }
    setProductIdsInCart(productIdsAddedObj);
    setCartList(cartListing);

}
const removeItemToCart=(productObj)=>{
    updateCount(count-1);
    let cartListing=[...cartList];
    let productIdsAddedObj={...productIdsInCart};
    if(productIdsAddedObj[productObj.id]===1){
        cartListing=cartListing.filter((prd)=>prd.id!==productObj.id);
        delete productIdsAddedObj[productObj.id];
    }else{
        productIdsAddedObj[productObj.id]-=1;
    }
    setProductIdsInCart(productIdsAddedObj);
    setCartList(cartListing);
}
const storeCtx={
    count,
    updateCount,
    cartList,
    updateItemToCart,
    productIdsInCart,
    removeItemToCart
}
  return (
    <StoreContext.Provider value={storeCtx}>
        {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContext;
