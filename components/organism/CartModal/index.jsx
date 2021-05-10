import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import CartItem from "../../molecules/CartItem"
import {
   toggleCart,
} from '../../../redux_store/cart/actions';
import { addToCart, removeFromCart } from "../../../redux_store/cart/actions"

// Redux State Configutration
const mapStateToProps = state => ({
   cartItems: state.cart.items,
   totalCartItems: state.cart.totalCartItems,
   showModal: state.cart.isOpen,
   productItems: state.product.items,
});

// Redux Dispatch Configutration
const mapDispatchToProps = {
   toggleCart: toggleCart,
   addToCart: addToCart,
   removeFromCart: removeFromCart,
};

class CartModal extends Component {
   total = 0
   getProduct = (product_id) => {
      let product = this.props.productItems.filter((item) => {
         return item.id == product_id
      })
      return product ? product[0] : null
   }

   prepareCartList = () => {
      this.total = 0
      const pro = Object.keys(this.props.cartItems)
      console.log(this.props.cartItems, "cartItems");
      let list = pro.map((product_id, index) => {
         let product = this.getProduct(product_id)
         if (product) {
            this.total += this.props.cartItems[product_id] * product.price
         }
         return product ?
            <CartItem
               key={index}
               actions={{ addToCart: this.props.addToCart, removeFromCart: this.props.removeFromCart, }}
               item={product}
               count={this.props.cartItems[product_id]}
            /> : <></>
      })
      return this.props.totalCartItems ? list : <>No item found</>
   }
   render() {
      const { showModal, toggleCart, cartItems, totalCartItems } = this.props
      return (
         <Modal isOpen={showModal} toggle={toggleCart} className="cartModal">
            <ModalHeader toggle={toggleCart} className="bg-dark text-white">
               <p className="mb-0">My Cart({totalCartItems} items)</p>
            </ModalHeader>
            <ModalBody className="overflow-auto">
               {this.prepareCartList()}
            </ModalBody>
            <ModalFooter>
               <small>Promo code can be applied on payment page</small>
               <Button color="secondary" className="col-md-12 text-left"
                  onClick={() => { toggleCart() }}
                  disabled={totalCartItems === 0}>
                  Procced to checkout<span className="float-right">Rs.{this.total}&nbsp;&nbsp;<span>{'>'}</span></span>
               </Button>
            </ModalFooter>
         </Modal>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);