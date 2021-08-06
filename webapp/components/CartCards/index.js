import {useState, useEffect} from "react";
import styles from "./CartCards.module.css"
import {Counter} from "../Counter";
import {useCart} from "../../utils/CartHelper";

const CartCards = ({product}) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const cart = useCart();
    const cartItems = cart.getCartItems()
    useEffect(() => {
        if(quantity === 0) {
            cart.removeFromCart(product.data.product_uid)
        } else {
            cart.editQuantity(product.data.product_uid, quantity)
        }
    }, [quantity])
    useEffect(() => {
        setQuantity(product.quantity)
    },[])
    return (
        <div className={styles["cart-item-container"]} >
            <img src={product.data.temp_url} alt={"Image goes here"} height={"90vh"} width={"100vw"}/>
            <div className={styles["cart-item-data"]}>
                <h3>{product.data.name}</h3>
                <div><Counter preDefinedCount={quantity} setParentCount={setQuantity}/></div>
            </div>
            <h2 className={styles["total-price-text"]}>{`₹${product.data.price * cartItems.find(item => item.product_uid === product.data.product_uid).quantity}`}</h2>
        </div>
    )
}

export default CartCards;