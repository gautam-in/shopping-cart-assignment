import { Drawer } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { addItemToCart, itemQuantity, removeItemFromCart, totalItemsCost } from "../../Redux/Cart-Action";
import "./cartIcon.css"

const CartIcon = (props) => {

    const navigate = useNavigate()

    const handleCancel = () => {
        props.closeModal()
    }

    const handleRemove = (product) => {
        props.removeItemFromCart(product)
        props.totalItemsCost()
        props.itemQuantity()
    }

    const handleAdd = (product) => {
        props.addItem(product)
        props.totalItemsCost()
        props.itemQuantity()
    }

    return (
        <article>
            <Drawer className="cart-drawer" placement={"right"} title={<p className="drawer-title">My Cart<span style={props.totalQuantity ? { display: 'block' } : { display: 'none' }}>({props.totalQuantity}{props.totalQuantity === 1 ? "item" : "items"})</span></p>} size={"large"} onClose={handleCancel} visible={props.visible}
                footer={<div className="footer-btn">
                    {props.totalQuantity ?
                        <div><p className="promo-text">Promo code can be applied on payment page</p>
                            <button className="proceed-btn" onClick={() => { handleCancel() }}>
                                <p className="checkout-text">Proceed to checkout</p>
                                <p className="cost">Rs.{props.totalCost} &gt;</p>
                            </button>
                        </div> :
                        <button className="proceed-btn" onClick={() => {
                            navigate("/Products")
                            handleCancel()
                        }}><p className="empty-cart-btn-text">Start Shopping</p></button>}
                </div>}>


                <div className="cart-container">
                    <div className="total-quntity">
                        {props.totalQuantity ? props.items ?
                            <>
                                <main>
                                    {props.items.map((product, key) => {
                                        return (
                                            <div className="cart-items">
                                                <div className="cart-item-img">
                                                    <img src={product.imageURL} alt={product.sku} height={"100px"} width={"100%"} />
                                                </div>
                                                <div className="content">
                                                    <strong className="cart-item-title">{product.name}</strong>
                                                    <div className="arrow">
                                                        <p className="quantity">{product.quantity}</p>
                                                        <span className="operator">X</span> <p className="prod-price">Rs.{product.price}</p>
                                                        <button className="remove" onClick={() => { handleRemove(product); }}>-</button>
                                                        <button className="add" onClick={() => { handleAdd(product); }}>+</button>
                                                    </div>
                                                </div>
                                                <div className="total-item-cost">
                                                    Rs.{product.quantity * product.price}
                                                </div>

                                            </div>
                                        );
                                    })}
                                </main>
                                <div className="footer-for-lowest"><div className="lowest-img"><img src={"static/images/lowest-price.png"} alt={"lowest-price"} /></div><div>You won't find it cheaper anywhere</div></div></> : null : <aside className="empty-cart-text">
                            <p className="no-items">No items in your cart</p>
                            <p className="tagline">Your favourite items are just a click away</p></aside>}
                    </div>
                </div>
            </Drawer>
        </article>
    )
}


const mapStateToProps = (state) => ({
    items: state.cart.cartItems,
    totalCost: state.cart.totalCost,
    totalQuantity: state.cart.itemsQuantity
})

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    totalItemsCost: () => dispatch(totalItemsCost()),
    itemQuantity: () => dispatch(itemQuantity())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
