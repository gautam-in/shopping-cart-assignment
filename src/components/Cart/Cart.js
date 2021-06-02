import React from 'react'
import * as actions from "../../store/actions/index"
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare, faMinusSquare, faTimes, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import "./cart.scss"
function Cart(props) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
    const showCart = useSelector(state => state.showCart)
    const clickHandler = () => {
        dispatch(actions.showCart(false))

    }
    const calculateTotalPrice = () => {
        const cartItems = useSelector(state => state.cartItems)

        const price = cartItems?.reduce((acc, item) => {
            return item.count * item.price + acc
        }, 0)
        return price
    }
    return (
        <div>
            {/* <Navbar /> */}
            <div className="parent" >
                <div className="cart-heading">
                    <header>My Cart ({cartItems?.length})</header>
                    <div onClick={() => dispatch(actions.showCart(!showCart))}><FontAwesomeIcon icon={faTimes} /></div> </div>

                {cartItems.length > 0 ? <div className="cart-container">{cartItems?.map(item => {
                  return <div className="cart-item inner-container" key={item.id}>
                        <div><img style={{ height: '90x', width: '50px' }} src={item.imageURL} alt={item.name}/></div>


                        <div className="innermost-container">

                            <div>{item.name}</div>
                            <div className="innermost-container2">

                                <div>
                                    <span onClick={() => dispatch(actions.incrementProduct(item))}>
                                        <FontAwesomeIcon icon={faPlusSquare} /></span>
                                    <span className="fa-align">{item.count}</span>
                                    <span onClick={() => dispatch(actions.decrementProduct(item))}>
                                        <FontAwesomeIcon icon={faMinusSquare} /></span>
                                    <span className="fa-align">X</span>
                                    <span>Rs. {item.price}</span>
                                </div>
                                <div> Rs. {item.price * item.count}</div>

                            </div>


                        </div>

                        <br />
                    </div>
                })}</div> : <div className="no-items"><div><h2>No Items in your Cart</h2> </div><p>Your favorite items are just a click away</p></div>}
                <div className="style-checkout">
                    <span > Promo code can be applied on payment page .</span>
                    <button className="style-button">
                        {cartItems.length > 0 ? <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                            <div onClick={clickHandler}>proceed to checkout</div><div>Rs.{calculateTotalPrice()}
                                {"  "}
                                <FontAwesomeIcon icon={faCaretRight} /></div></div> :
                            <div onClick={clickHandler}>Start Shopping</div>}
                    </button>

                </div>

            </div>
        </div>
    )
}

export default withRouter(Cart)