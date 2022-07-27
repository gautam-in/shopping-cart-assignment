import { ProductInterface } from "../../../pages/products"
import CartItem from "../CartItems"

const CartList = ({products}:{products:ProductInterface[]}) =>{
    return (
        <>
            {
                products.length && products.map((product:ProductInterface)=><CartItem product={product} />)
            }
        </>
        
    )
}

export default CartList;