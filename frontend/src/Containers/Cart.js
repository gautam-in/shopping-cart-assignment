import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router";
import CartItem from "../Components/CartItem";
import * as cartActions from '../store/actions/cartAction';
import Product from "./Products";
import "./Cart.css";

const Cart = () => {

    const cartItems = useSelector(state => state.Cart.items);
    const amount = useSelector(state => state.Cart.totalAmount);
    const dispatch = useDispatch();
    const history = useHistory();

    const increase = (productId) => {
        dispatch(cartActions.increaseQty(productId));
    }

    const decrease = (productId) => {
        dispatch(cartActions.decreaseQty(productId));
    }

    const handleBack = () => {
        history.goBack();
    }

    return(
        <>
            <div className="cartdesktop">
                <Product/>
                <div className="overlayContainer"></div>
                <div className="overlay">
                    <div style={{display:'flex',flexDirection:'column',backgroundColor:'#efeeee',justifyContent:'space-between',height:'100vh',width:'35%'}}>
                        <div>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'black',color:'white',marginBottom:'3%',height:'50px'}}>
                                <span style={{paddingLeft:'2%'}}><b>My Cart</b> {cartItems.length == 0? '':`(${cartItems.length} items)`} </span>
                                <span onClick={handleBack}>&#10060;</span>
                            </div>
                            { cartItems.map((item)=>{
                                return <CartItem key={item.id} id={item.id} title={item.name} imagesrc={item.imageURL} price={item.price} qty={item.quantity} amount={item.amount} increase={increase} decrease={decrease} />
                            })}
                            {cartItems.length == 0?
                            <div style={{textAlign:'center',paddingTop:'50%'}}>
                                <b><span>No items in your cart</span></b>
                                <p>Your favourite items are just a click away</p>
                            </div>:
                            <div style={{display:'flex',alignItems:'center', justifyContent:'flex-start', backgroundColor:'white'}}>
                                <img src={process.env.PUBLIC_URL + '/static/images/lowest-price.png'} style={{maxWidth:'100%',height:'auto',paddingLeft:'2%',paddingRight:'5%'}}/>
                                <div>You won't find it cheaper anywhere</div>
                            </div>}
                        </div>
                        {cartItems.length == 0?
                        <div style={{paddingLeft:'3%',paddingRight:'3%',paddingBottom:'3%'}}>
                            <button onClick={handleBack} style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',display:'flex',width:'100%',justifyContent:'center'}}> Start Shopping </button>
                        </div>:
                        <div style={{backgroundColor:'whitesmoke'}}>
                            <p style={{textAlign:'center'}}>Promo code can be applied on payment page</p>
                            <button style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',display:'flex',width:'100%',justifyContent:'space-between'}}> <span style={{paddingLeft:'2%'}}> Proceed to Checkout </span> <span style={{paddingRight:'2%'}}> Rs{amount} &#707; </span> </button>
                        </div>}
                    </div>
                </div>
            </div>

            <div className="tablet__mobile" style={{display:'flex',flexDirection:'column',backgroundColor:'#efeeee',justifyContent:'space-between',paddingTop:'5%',height:'100vh',width:'100%'}}>
                <div>
                    <div style={{display:'flex',alignItems:'center',color:cartItems.length == 0?'white':'black',backgroundColor:cartItems.length == 0?'black':'white',marginBottom:'3%',paddingLeft:'2%',height:'50px'}}>
                        <b>My Cart</b> {cartItems.length == 0? '':`(${cartItems.length} items)`}
                    </div>
                    { cartItems.map((item)=>{
                        return <CartItem key={item.id} id={item.id} title={item.name} imagesrc={item.imageURL} price={item.price} qty={item.quantity} amount={item.amount} increase={increase} decrease={decrease} />
                    })}
                    {cartItems.length == 0?
                    <div style={{textAlign:'center',paddingTop:'50%'}}>
                        <b><span>No items in your cart</span></b>
                        <p>Your favourite items are just a click away</p>
                    </div>:
                    <div style={{display:'flex',alignItems:'center', justifyContent:'flex-start', backgroundColor:'white'}}>
                        <img src={process.env.PUBLIC_URL + '/static/images/lowest-price.png'} style={{maxWidth:'100%',height:'auto',paddingLeft:'2%',paddingRight:'5%'}}/>
                        <div>You won't find it cheaper anywhere</div>
                    </div>}
                </div>
                {cartItems.length == 0?
                <div style={{paddingLeft:'3%',paddingRight:'3%',paddingBottom:'3%'}}>
                    <button onClick={handleBack} style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',display:'flex',width:'100%',justifyContent:'center'}}> Start Shopping </button>
                </div>:
                <div style={{backgroundColor:'whitesmoke'}}>
                    <p style={{textAlign:'center'}}>Promo code can be applied on payment page</p>
                    <button style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer',display:'flex',width:'100%',justifyContent:'space-between'}}> <span style={{paddingLeft:'2%'}}> Proceed to Checkout </span> <span style={{paddingRight:'2%'}}> Rs{amount} &#707; </span> </button>
                </div>}
            </div>
        </>
    )
}

export default Cart;