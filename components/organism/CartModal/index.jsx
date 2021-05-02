import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';

import {
   toggleCart,
} from '../../../redux_store/cart/actions';


// Redux State Configutration
const mapStateToProps = state => ({
   cartItems: state.cart.cartItems,
   showModal: state.cart.showModal,
});

// Redux Dispatch Configutration
const mapDispatchToProps = {
   toggleCart: toggleCart,
};

class CartModal extends Component {
   render() {
      const { showModal, toggleCart, cartItems } = this.props
      return (
         <Modal isOpen={showModal} toggle={toggleCart} className="cartModal">
            <ModalHeader toggle={toggleCart} className="bg-dark text-white">
               <p className="mb-0">My Cart({cartItems?.length} items)</p></ModalHeader>
            <ModalBody>
               No item found // TODO  render cart items
            </ModalBody>
            <ModalFooter>
               <small>Promo code can be applied on payment page</small>
               <Button color="secondary" className="col-md-12 text-left"
                  onClick={() => { toggleCart() }}>
                  Procced to checkout<span className="float-right">Rs.187&nbsp;&nbsp;<span>{'>'}</span></span>
               </Button>
            </ModalFooter>
         </Modal>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);