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

    return (
        <>
            <div className={show ? 'show-div' : 'hide-div'}>
                <div id="myModal" className="modal">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 aria-label="cart header title">{header}</h2>
                            <div role="close button" className="close" onClick={handleClose} aria-label="cart close icon" >X</div>
                        </div>
                        <div className="modal-body">
                            {
                                cartItem == 0 ? (
                                    <article>
                                        <strong>No items in your cart</strong>
                                        <p> Your Favourite items are just a click away</p>
                                    </article>
                                ) : (
                                    cartDetails.map(item => {
                                        return (
                                            <div className="cart-item" key={item.id}>
                                                <figure>
                                                    <img src={item.imageURL} className="cart-item-img" alt={item.name + "image"} height="100" width="100" aria-label={item.name + "image"} />
                                                    <div className="cart-item-details">
                                                        <figcaption><strong>{item.name}</strong></figcaption>
                                                        <div className="cart-item-count">
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
                            <CustomButton >{cartItem == 0 ? cartConstants.START_SHOPPING : cartConstants.CHECK_OUT}</CustomButton>
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