import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { imageURL } from '../../utils/URL';
import { getCart } from './CartSlice'
import { CartItem } from './CartItem';

import './Cart.scss';

export const Cart = (props) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart())
    }, [])
    const cartList = useSelector(state => state.cart, shallowEqual);

    useEffect(() => {
        let totalAmount = 0;
        cartList.cart.forEach(element => {
            totalAmount += element.totalPrice;
        });
        setTotalPrice(totalAmount);
    }, [cartList]);


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            className='cart'
            centered
        >
            <Modal.Header closeButton closeVariant="white">
                <Modal.Title id="contained-modal-title-vcenter">
                    <Card.Body><h5 className='d-inline'>My Cart</h5> (1 item)</Card.Body>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={cartList.cart.length > 0 ? 'cart-grey-bg' : 'd-flex align-items-center'}>
                {cartList.cart.length > 0 ?
                    <>
                        {cartList.cart.map((item, index) =>
                            <CartItem item={item} key={index}/>
                        )}

                        <Card className='cart-adv d-flex flex-row'>
                            <Card.Img src={process.env.REACT_APP_BASE_URL + imageURL.lowestPriceURL} width="122px" alt="Lowest price image" />
                            <Card.Body>
                                You won't find it cheaper anywhere
                            </Card.Body>
                        </Card>
                    </>
                :
                <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
                    <h4 className='mb-0'><strong>No items in your cart</strong></h4>
                    <span>Your favorite items are just a click away</span>
                </Card.Body>
                }
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                {cartList.cart.length > 0 ?
                    <><div className='cart-footer-title'>Promo code can be applied on payment page</div>
                        <button className='cart-checkout-btn' onClick={props.onHide}>
                            <div>Proceed to Checkout</div>
                            <div>Rs. {totalPrice}<span>&gt;</span></div>
                        </button></>
                    :
                    <button className='cart-checkout-btn justify-content-center' onClick={props.onHide}>
                        <div>Start Shopping</div>
                    </button>
                }
            </Modal.Footer>
        </Modal>


    )
}
