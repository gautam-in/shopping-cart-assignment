import { useCart } from "../../utils/CartHelper"
import {useEffect, useState} from "react";
import styles from "../../styles/Cart.module.css"
import { useAuth } from "../../utils/AuthProvider";
import { Button } from "antd";
import Image from "next/image"
import lowestPriceImage from "../../assets/images/lowest-price.png"
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../products/[category_uid]";
import {Loading} from "../../components/Loading";

const Cart = () => {
    const cart = useCart();
    const cartItems = cart.getCartItems();
    const auth = useAuth();

    const productsObj = useQuery(GET_PRODUCTS, {
        variables: {category: "all"}
    })

    useEffect(() => {
        if(auth.isSignedIn()) {

        }
    })

    console.log("cart", cartItems)
    const cartButton = () => {
        return (
            <Button className={styles["cart-button"]}>
                <p style={{color: "white"}}>{cartItems.length ? "Proceed to Checkout" : "Start Shopping"}</p>
            </Button>
        )
    }
    if(productsObj.loading) {
        return <Loading/>
    } else if(productsObj.error) {
        return <div>{productsObj.error || categoryObj.error}</div>
    } else {
        if(cartItems.length === 0) {
            return (
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    <h1><b>No items in your cart</b></h1>
                    <h3 style={{marginTop: 5}}>Your favourite items are just a click away</h3>
                    <div className={styles["cart-footer"]}>
                        {cartButton()}
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles["cart-container"]}>
                    <div className={styles["cart-header"]}>
                        <h1><b>My Cart</b> {`(${cart.getCartCount()} items)`}</h1>
                    </div>
                    <div className={styles["lowest-price-card"]}>
                        <Image src={lowestPriceImage} alt={"Lowest Price"} style={{height: "6vh", width: "20vw", marginRight: 30}}/>
                        <h3>You won't find it cheaper anywhere</h3>
                    </div>
                    <div className={styles["cart-footer"]}>
                        {cartButton()}
                    </div>
                </div>
            )
        }
    }
}

export default Cart
