import { Product} from "../../../pages/products"
import CartItem from "../CartItems"

const CartList = ({products}:{products:Product[]}) =>{
    return (
        <>
            {
                products.length && products.map((product:Product)=><CartItem product={product} />)
            }
        </>
        
    )
}

export default CartList;