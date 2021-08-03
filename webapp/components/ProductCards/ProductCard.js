import { useState, useEffect } from "react";
import styles from "./ProductCards.module.css";
import {Button} from "antd";
import {useCart} from "../../utils/CartHelper";
import {Counter} from "../Counter";


export const ProductCard = ({product}) => {
    const [buyNowClicked, setBuyNowClicked] = useState(false)
    const cart = useCart();
    const cartItems = cart.getCartItems();
    const onClickBuyNow = () => {
        setBuyNowClicked(true);
        cart.addToCart({
            product_uid: product.product_uid,
            quantity: 1
        });
    }
    const setProductCount = (count) => {
        if(count === 0) {
            setBuyNowClicked(false);
            cart.removeFromCart(product.product_uid)
        } else {
            cart.editQuantity(product.product_uid, count)
        }
    }
    return (
        <div className={styles["product-card"]}>
            <h3><b>{product.name}</b></h3>
            <img src={product.temp_url} alt={product.name} height={150} width={190}/>
            <div className={styles["description-box"]}>
                <p style={{fontSize: 12}}>{product.description}</p>
            </div>
            <div className={styles["price-container"]}>
                <h4>{`MRP ₹${product.price}`}</h4>
                {buyNowClicked || cartItems.find(item => item.product_uid === product.product_uid) ?
                    <Counter setParentCount={setProductCount}/>
                    :
                    <Button onClick={onClickBuyNow}>
                        Buy Now
                    </Button>
                }
            </div>
        </div>
    )
}