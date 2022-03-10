import React from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { addItemToCart, itemQuantity, removeItemFromCart, totalItemsCost } from "../../Redux/Cart-Action";
import "./minicart.css"

const MiniCart = (props) => {

    const navigate = useNavigate()

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
            <div className="mini-cart-container">
                <div className="mini-total-quntity">
                    {props.totalQuantity ? props.items ?
                        <div className="mini-cart-items">
                            <header className="minicart-header">
                                <p className="mini-title"><strong>My Cart</strong><span style={props.totalQuantity ? { display: 'block' } : { display: 'none' }}>({props.totalQuantity}{props.totalQuantity === 1 ? "item" : "items"})</span></p>
                            </header>
                            <main>
                                {props.items.map((product, key) => {
                                    return (
                                        <div className="mini-items">
                                            <div className="mini-cart-item-img">
                                                <img src={product.imageURL} alt={product.sku} />
                                            </div>
                                            <div className="mini-content">
                                                <strong className="mini-cart-item-title">{product.name}</strong>
                                                <div className="mini-arrow">
                                                    <p className="mini-quantity">{product.quantity}</p>
                                                    <span className="mini-operator">X</span> <p className="prod-price">Rs.{product.price}</p>
                                                    <button className="mini-remove" onClick={() => { handleRemove(product); }}>-</button>
                                                    <button className="mini-add" onClick={() => { handleAdd(product); }}>+</button>
                                                </div>
                                            </div>
                                            <div className="mini-total-item-cost">
                                                Rs.{product.quantity * product.price}
                                            </div>

                                        </div>
                                    );
                                })}
                            </main>
                            <aside>
                                <div className="mini-footer-for-lowest">
                                    <div className="mini-lowest-img">
                                        <img className="mini-lowest-image" src={"static/images/lowest-price.png"} alt={"mini-lowest-price"} />
                                    </div>
                                    <div className="mini-lowest-text">You won't find it cheaper anywhere</div>
                                </div>
                            </aside>
                            <footer className="mini-footer-row">
                                <div className="mini-footer-btn">
                                    {props.totalQuantity ?
                                        <div className="mini-promo-footer">
                                            <p className="mini-promo-text">Promo code can be applied on payment page</p>
                                            <button className="mini-proceed-btn" onClick={() => { navigate("/Products") }}>
                                                <p className="mini-checkout-text">Proceed to checkout</p>
                                                <p className="mini-cost">Rs.{props.totalCost} &gt;</p>
                                            </button>
                                        </div> : null}
                                </div>
                            </footer>
                        </div> : null : <div>
                        <aside className="mini-empty-cart-text">
                            <p className="mini-no-items">No items in your cart</p>
                            <p className="mini-tagline">Your favourite items are just a click away</p>
                        </aside>
                        <div className="mini-start-shop-btn">
                            <button className="mini-proceed-btn-noItems" onClick={() => {
                                navigate("/Products")
                            }}><p className="mini-empty-cart-btn-text">Start Shopping</p></button>
                        </div>
                    </div>
                    }
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)
