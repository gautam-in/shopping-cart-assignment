import React, { useState } from "react";
import { connect } from "react-redux";
import { cartConstants } from "../../Constants";
import { cartActions } from "../../_actions";
import CustomButton from "../CustomButton/CustomButton";
import "./Cart.scss";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const Cart = ({
    show,
    handleClose,
    cartItem,
    cartDetails,
    addToCart,
    removeFromCart
}) => {

    const [header, setHeader] = useState("My Cart");
    const totalCartPrice = cartDetails.reduce((accumulator, item) => {
        return accumulator + (item.count * item.price)
    }, 0);

    return (
        <>
            <div className={show ? 'show-div' : 'hide-div'}>
                <div id="myModal" className="modal" aria-label="cart modal">

                    <div className="modal-content">
                        <div className="modal-header" aria-label="cart header">
                            <h2 aria-label="cart header title">{header}</h2>
                            <div role="close button" className="close" onClick={handleClose} aria-label="cart close icon" >X</div>
                        </div>
                        <div className="modal-body" aria-label="Added Product details in the cart">
                            {
                                cartItem == 0 ? (
                                    <article aria-label="No cart item description">
                                        <strong>No items in your cart</strong>
                                        <p> Your Favourite items are just a click away</p>
                                    </article>
                                ) : (
                                    cartDetails.map(item => {
                                        return (
                                            <div className="cart-item" key={item.id}>
                                                <figure>
                                                    <img src={item.imageURL} className="cart-item-img" alt={item.name + "image"} height="100" width="100" aria-label={"Image of product" + item.name} />
                                                    <div className="cart-item-details">
                                                        <figcaption aria-label={"Product name is" + item.name}><strong>{item.name}</strong></figcaption>
                                                        <div className="cart-item-count" aria-label={"selected count details for product is" + item.name}>
                                                            <>
                                                                <CustomButton width="30px" height="25px" onClick={() => removeFromCart(item)}><FaMinusSquare /></CustomButton>
                                                                <div className="count" aria-label={"count of" + item.name + "is" + item.count}>{item.count}</div>
                                                                <CustomButton width="30px" height="25px" onClick={() => addToCart(item)}><FaPlusSquare /></CustomButton>
                                                                <div className="count">X Rs.{item.price}</div>
                                                            </>
                                                        </div>
                                                    </div>
                                                    <div className="cart-item-total" aria-label={"total price for" + item.name + "is" + item.count * item.price}>{item.count * item.price}</div>
                                                </figure>
                                            </div>
                                        )
                                    })
                                )
                            }
                        </div>
                        <div className="modal-footer">
                            <CustomButton onClick={handleClose}>
                                <span style={cartItem == 0 ? {} : { display: "flex", justifyContent: "space-around" }}>
                                    {cartItem == 0 ? cartConstants.START_SHOPPING : (
                                        <>
                                            <span>{cartConstants.CHECK_OUT}</span>
                                            <output>
                                                <span>Rs.</span>{totalCartPrice}
                                                <span className="way-checkout-icon">{">"}</span>
                                            </output>
                                        </>)
                                    }
                                </span>
                            </CustomButton>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const { cart } = state;
    const { showModal, cartItem, cartDetails } = cart;
    return { show: showModal, cartItem, cartDetails };
}

const mapDispatchToProps = {
    handleClose: cartActions.hideCart,
    addToCart: cartActions.addToCart,
    removeFromCart: cartActions.removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);