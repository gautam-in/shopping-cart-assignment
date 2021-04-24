import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button,Row,Col } from 'reactstrap';

class CartModal extends Component {
    state = {
        showModal : true
    }

    toggle = () =>{
        this.setState({
            showModal : !this.state.showModal
        }, () =>{this.props.modalStatus()})
    }

    render(){
        const {showModal} = this.state
        return(
            <Modal isOpen={showModal} toggle={this.toggle} className="cartModal">
                <ModalHeader toggle={this.toggle} className="bg-dark text-white"><p className="
                mb-0">My Cart(2 items)</p></ModalHeader>
                <ModalBody>
                    No item found
                </ModalBody>
                <ModalFooter>
                    <small>Promo code can be applied on payment page</small>
                    <Button color="secondary" className="col-md-12 text-left" onClick={() =>{this.toggle()}}>Procced to checkout<span className="float-right">Rs.187&nbsp;&nbsp;<span>{'>'}</span></span></Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CartModal;