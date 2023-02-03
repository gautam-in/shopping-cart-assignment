import { useSelector } from "react-redux";

const  useGetCartData = () =>{
    const cartItems = useSelector(state => state.cart);

    let totalPrice = cartItems?.reduce((tot,i)=>{
        return tot + i.qty*i.price
    },0);

    let totalQty = cartItems?.reduce((tot,i)=>{
        return tot + i.qty
    },0);

    return {totalQty,totalPrice};
}

export default useGetCartData;