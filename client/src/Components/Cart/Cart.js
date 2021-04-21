import React, { useState } from "react";
import { connect } from "react-redux";
import { cartConstants, productConstants } from "../../Constants";
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
                <div id="myModal" className="modal">

                    <div className="modal-content" aria-label="cart modal" tabIndex="7">
                        <div className="modal-header" aria-label="cart header">
                            <h2 aria-label="My Cart header" tabIndex="8">{header + " (" + cartItem + "items)"}</h2>
                            <div role="close button" className="close" onClick={handleClose} aria-label="cart close icon, click if you want to close the cart modal" tabIndex="9" >X</div>
                        </div>
                        <div className="modal-body" aria-label="Added Product details in the cart">
                            {
                                cartItem == 0 ? (
                                    <article aria-label="No cart item description">
                                        <strong aria-label={cartConstants.EMPTY_CART} tabIndex="10">{cartConstants.EMPTY_CART}</strong>
                                        <p aria-label={cartConstants.EMPTY_CART_DESCRIPTION} tabIndex="11">{cartConstants.EMPTY_CART_DESCRIPTION}</p>
                                    </article>
                                ) : (
                                    <ol className="cart-list">
                                        { cartDetails.map((item, index) => {
                                            return (
                                                <li className="cart-item-list" key={item.id} tabIndex={"10" + index} aria-label={"cart list detail of product is" + item.name}>
                                                    <figure>
                                                        <img src={item.imageURL} className="cart-item-img" alt={item.name + "image"} aria-label={"Image of product" + item.name} />
                                                        <div className="cart-item-details">
                                                            <figcaption aria-label={"Product name is" + item.name} tabIndex={"10" + index}><strong>{item.name}</strong></figcaption>
                                                            <div className="cart-item-count" aria-label={"selected count details for product is" + item.name} tabIndex={"10" + index}>
                                                                <>
                                                                    <CustomButton aria-label={"Minus button to decrease the product count"} tabIndex={"10" + index} width="30px" height="25px" onClick={() => removeFromCart(item)}><FaMinusSquare /></CustomButton>
                                                                    <div className="count" tabIndex={"10" + index} aria-label={"count of" + item.name + "is" + item.count}>{item.count}</div>
                                                                    <CustomButton aria-label={"Plus button to increase the product count"} tabIndex={"10" + index} width="30px" height="25px" onClick={() => addToCart(item)}><FaPlusSquare /></CustomButton>
                                                                    <div className="count" tabIndex={"10" + index} aria-label={"price for " + item.name + "is" + item.price}>X Rs.{item.price}</div>
                                                                </>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item-total" tabIndex={"10" + index} aria-label={"total price for" + item.name + "is" + item.count * item.price}>{item.count * item.price}</div>
                                                    </figure>
                                                </li>
                                            )
                                        })
                                        }
                                    </ol>
                                )
                            }
                        </div>
                        <div className="modal-footer">
                            {cartItem == 0 ? "" :
                                <p>{cartConstants.PROMO_CODE}</p>
                            }
                            <CustomButton onClick={handleClose} aria-label={cartConstants.CHECK_OUT + "button, total price of selected products is" + totalCartPrice} tabIndex={"12"}>
                                <span style={cartItem == 0 ? {} : { display: "flex", justifyContent: "space-around" }}>
                                    {cartItem == 0 ? cartConstants.START_SHOPPING : (
                                        <>
                                            <span>{cartConstants.CHECK_OUT}</span>
                                            <output>
                                                <span>{productConstants.RS}</span>{totalCartPrice}
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