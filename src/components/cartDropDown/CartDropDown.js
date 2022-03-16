import React from 'react';

import './cartDropDown.styles.scss';
import { Modal, Button } from 'antd';
import Cartitem from '../cartItems/CartItems';
import { connect } from 'react-redux';
import {setCartItems,removecartItems} from '../../redux/cart/cart.action';
import {Link} from 'react-router-dom';



class CartDropDown extends React.Component{
    state ={
        finalprice:""
    }
    removeitemsFromCart=(item)=>{
        this.props.removecartItems(item);
    }
    addItemsTOCart = (item)=>{
        this.props.setCartItems(item);
    }
    finalPrice=()=>{
        return this.props.cartItems.length && this.props.cartItems.reduce((acc, item)=>{
            return (item.quantity * item.price) + acc
        },0);
    }
    render(){
        const {cartItems,removecartItems}= this.props;
        return(
        <Modal
          title={<div className='cart_modal_header'>My Cart</div>}
          style={{ top: 60,right:-450 }}
          visible={this.props.cart_popup}
          className="checkout-modal"
          onCancel={()=>this.props.onCartClick(false)}
          footer={
            cartItems.length?<div><p style={{textAlign:"center"}}>Promo code can be applied on payment page</p><Button size='large' style={{width:"100%"}} className="checkoutbtn" onClick={()=>this.props.onCartClick(false)}><Link to="/"><p>Proceed to checkout</p><p>Rs.{this.finalPrice()}</p></Link></Button>
          </div>:<Button size='large' style={{width:"100%"}} className="strt_shpng_btn" onClick={()=>this.props.onCartClick(false)}><Link to="/">Start Shopping</Link></Button> }
        >
            {
              cartItems.length? <Cartitem cart_items={cartItems} removeitemsFromCart={this.removeitemsFromCart} addItemsTOCart ={this.addItemsTOCart }/>:<div className='no_items_container flex'><div><h3>No Items In Your Cart</h3><p>Your faviourate items are just a click away</p></div></div>
            }
           
          
        </Modal>

            
        )
    }
}
const mapStateToPros = (state, prop) => {
    return {
      cartItems: state.cartReducer.cart_items,
    }
}

const mapDispatchToProps = {
    setCartItems,
    removecartItems
  }
  



export default connect(mapStateToPros, mapDispatchToProps)(CartDropDown);