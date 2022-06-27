import React from "react"
import { Link } from "react-router-dom"
import "../../styles/components/cart.scss"
import { useSelector, useDispatch } from "react-redux"
import { addTocart, openCart, removeFromCart, decreaseCartItem } from "../../features/cart/CartSlice"
import EmptyCart from "./EmptyCart"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"
import cheaperLogo from '../../assets/images/lowest-price.png';


const Cart = () => {

    const { cartOpen, cartList } = useSelector(state => state.CartReducer)
    const history = useHistory()
    const dispatch = useDispatch()
    const handleAddToCartItem = (quantity, item) => {

        dispatch(addTocart({ quantity: quantity, item: item }))



    }

    console.log("cartlist",cartList)

    const handleRemoveCartItem = (quantity, item) => {
        console.log("inside removecartitem")
        console.log("quantity", quantity, "item is".item)
        if (quantity === 1) {
            console.log("quantity is 0")
            dispatch(removeFromCart({ quantity: quantity, item: item }))
        }
        dispatch(decreaseCartItem({ quantity: quantity, item: item }))


    }

    const totalPrice = () => {
        return cartList.cartItems.reduce((acc, item) => {
            console.log('acc is', acc, 'item is', item)
            return acc + item.price * item.quantity
        }, 0)
    }

    const closeCart = () => {
        dispatch(openCart())
    }

    const handleCheckout = () => {

        dispatch(openCart())
        history.push("/home")
    }


    const IsCartEmpty = cartList.cartItems.length === 0

    console.log('IsCartEmpty', IsCartEmpty, "cart list", cartList)

    return (
        <div className="overlay">
            <main className="minicart_container">
                <header className="minicart_header">

                    <div className="cartitems_count">{!IsCartEmpty ? `My Cart (${cartList.totalItems ? cartList.totalItems : ""} items)` : "My Cart"}</div>
                    <div className="closebutton">
                        <FontAwesomeIcon icon={faXmark} onClick={closeCart} />
                    </div>
                </header>
                <main className={!IsCartEmpty ? "minicart_body" : "minicart_empty_body"}>
                    {!IsCartEmpty &&
                        <section className="minicart_content_body">
                            {cartList.cartItems && cartList.cartItems.map(item => {
                                return (<div className="minicart_item" key={item.id}>
                                    <img src={item.imageURL} alt={`image of ${item.name} `}/>
                                    <div className="desc">
                                        <div className="desc_name">{item.name}</div>
                                        <div className="calculation_box">
                                            <button className="btn-plus" onClick={() => handleAddToCartItem(item.quantity, item)}>+</button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button className="btn-minus" onClick={() => handleRemoveCartItem(item.quantity, item)}>-</button>
                                            <span className="cross_multiply">x</span>
                                            {item.quantity === 0 ? <span className="price">{item.price}</span> : <span className="price">{item.quantity * item.price}</span>}
                                        </div>
                                    </div>

                                </div>)
                            })}


                            <div className="cheaper_container">
                                <img src={cheaperLogo} alt="cheaperImg"></img>
                                <p>you wont find it cheaper anywhere</p>
                            </div>

                        </section>}
                    {IsCartEmpty && <main className="minicart_empty_body">
                        <EmptyCart />

                    </main>}


                </main>
                <footer className="minicart_footer">
                    {!IsCartEmpty && <div className="cart_content_footer">

                        <p>Promo code can be applied on payment Page</p>
                        <div className="cart_checkout_button">
                            <Link to="/">
                                <p onClick={handleCheckout}>Proceed to checkout</p>
                            </Link>
                            <div className="totalPrice">{`Rs.${totalPrice()}`}</div>


                        </div>

                    </div>}
                    {IsCartEmpty &&
                        <section className="cart_content_footer">
                            <button className="cart_shopping_button" onClick={handleCheckout}>Start Shopping</button>
                        </section>
                    }

                </footer>





            </main>
        </div>)

}

export default Cart