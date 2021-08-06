import {CartContext, useCart} from "../../utils/CartHelper"
import {useEffect, useState} from "react";
import styles from "../../styles/Cart.module.css"
import { useAuth } from "../../utils/AuthProvider";
import {useRouter} from "next/router";
import { Button } from "antd";
import Image from "next/image"
import lowestPriceImage from "../../assets/images/lowest-price.png"
import {gql, useQuery, useMutation} from "@apollo/client";
import {GET_PRODUCTS} from "../products/[category_uid]";
import {Loading} from "../../components/Loading";
import CartCards from "../../components/CartCards";
import {ToastMessage} from "../../components/ToastMessage";

const ADD_TO_CART_MUTATION = gql`
    mutation AddToCart($cartData: CartInput) {
        addToCart(cartData: $cartData) {
            value
            items{
                product_uid
                quantity
                price
            }
        }
    }
`

const Cart = () => {
    const [addToCart, addToCartObj] = useMutation(ADD_TO_CART_MUTATION)
    const auth = useAuth();
    const cartContextData = useCart();
    const router = useRouter();
    const productsObj = useQuery(GET_PRODUCTS, {
        variables: {category: "all"}
    })


    useEffect(async () => {
        if(auth.isSignedIn()) {
            const value = cartContextData.getCartValue();
            const items = cartContextData.getCartItems();
            try {
                const response = await addToCart({variables: {cartData: cartContextData.getCartData()}})
                cartContextData.updateCart(response.data.addToCart)
            } catch (e) {

            }
        }
    },[])

    const cartButton = (isEmptyCart, data) => {
        console.log("data", data)
        return (
            <Button
                className={styles["cart-button"]}
                onClick={async (e) => {
                    if(isEmptyCart) {
                        router.push("products/all")
                    } else if(!auth.isSignedIn()) {
                        router.push("signin")
                    } else {
                        {
                            const response = await addToCart({
                                variables: {
                                    cartData: data
                                }})
                            cartContextData.updateCart(response.data.addToCart);
                            ToastMessage("success",{content: "Items added to cart successfully"})
                        }
                    }
                }}
            >
                <p style={{color: "white"}}>{isEmptyCart ? "Start Shopping" : "Proceed to Checkout" }</p>
            </Button>
        )
    }
    return (
        <CartContext.Consumer>
            {(cart) => {
                const cartItems = cart.getCartItems()
                let cartData = []
                if(productsObj.loading || addToCartObj.loading) {
                    return <Loading/>
                } else if(productsObj.error || addToCartObj.error) {
                    return <div>{productsObj.error || addToCartObj.error}</div>
                } else {
                    cartData = cartItems.map((item) => {
                        const productData = productsObj.data.products.find((productItem) => productItem.product_uid === item.product_uid);
                        return Object.assign({}, {data: productData, ...item})
                    });
                    if(cartItems.length === 0) {
                        return (
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                                <h1><b>No items in your cart</b></h1>
                                <h3 style={{marginTop: 5}}>Your favourite items are just a click away</h3>
                                <div className={styles["cart-footer"]}>
                                    {cartButton(true)}
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className={styles["cart-container"]}>
                                <div className={styles["cart-header"]}>
                                    <h1><b>My Cart</b> {`(${cart.getCartCount()} items)`}</h1>
                                </div>
                                {cartData.map((cartDataItem, index) => (
                                    <CartCards product={cartDataItem} key={cartDataItem.product_uid}/>
                                ))}
                                <div className={styles["lowest-price-card"]}>
                                    <Image src={lowestPriceImage} alt={"Lowest Price"} style={{height: "6vh", width: "20vw", marginRight: 30}}/>
                                    <p style={{fontSize: "2vh"}}>You won't find it cheaper anywhere</p>
                                </div>
                                <div className={styles["cart-footer"]}>
                                    {cartButton(false, cart.getCartData())}
                                </div>
                            </div>
                        )
                    }
            }}}
        </CartContext.Consumer>
    )
}

export default Cart
