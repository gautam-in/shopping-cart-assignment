import { useSelector } from "react-redux";
import { Product} from "../../../pages/products"
import CartItem from "../CartItems"

const CartList = () =>{
    
    const carts = useSelector((state:any) => state.updateCartItems.cart);

    return (
        carts?.length>0 ?(
            <>
            {carts.map((product:Product)=><CartItem product={product} />)}
            </>
            ):(
                <div className="d-flex flex-column align-items-center">
                    <h2>Nothing in your cart</h2>
                    <div>your favourite items are just click away!</div>
                </div>
            )
    )
}

export default CartList;