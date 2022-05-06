import { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Row, Col, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { cartItemUpdaterTypes } from '../../utils/constants';
import { toggleCartModalView, updateCartQuanityByProduct } from '../../store/actions';
import {cartSelector, cartModalViewSelector} from '../../store/selectors';

class Cart extends Component {
    toggleModal = () => {
        this.props.dispatch(toggleCartModalView());
    };

    render() {
        const { cart, cartCountAndPrice, showCartModalView, dispatch } = this.props;
        const { quantity: totalItemsCount, price: totalItemsPrice } = cartCountAndPrice;
        const isEmptyCart = totalItemsCount === 0;

        return (
            <Modal isOpen={showCartModalView} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} className="custom-modal-header">
                    My Cart  {!isEmptyCart && <>({totalItemsCount} items)</>}
                </ModalHeader>
                <ModalBody>
                    {cart.map(cartItem => (
                        <Row key={cartItem.id} className="mb-5">
                            <Col xs={2}>
                                <img src={cartItem.imageURL} alt="cart image" height={60} width={60} />
                            </Col>
                            <Col xs={8}>
                                <h6 className='cart-product-name'>{cartItem.name}</h6>
                                <button type='button' className='cart-count-updater-btn' onClick={() => dispatch(updateCartQuanityByProduct(cartItem.id, cartItemUpdaterTypes.DECREMENT))}>
                                    <span>-</span>
                                </button>
                                <span>{cartItem.quantity}</span>
                                <button disabled={cartItem.quantity >= cartItem.stock} type='button' className='cart-count-updater-btn' onClick={() => dispatch(updateCartQuanityByProduct(cartItem.id, cartItemUpdaterTypes.INCREMENT))}>
                                    <span>+</span>
                                </button>

                                &nbsp; x &nbsp;

                                Rs.{cartItem.price}
                            </Col>
                            <Col xs={2}>
                                Rs.{cartItem.quantity * cartItem.price}
                            </Col>
                        </Row>
                    ))}

                    {isEmptyCart ? (
                        <section className='cart-section empty-cart'>
                            <h5>No items in your cart</h5>
                            <p>Your favourite items are just a click away</p>
                        </section>
                    ) : (
                        <Row className='cart-section text-left'>
                            <Col xs={4}>
                                <img src="/static/images/lowest-price.png" alt="lowest price" />
                            </Col>
                            <Col xs={8} className='mt-3'>You won't find it cheaper anywhere</Col>
                        </Row>
                    )}
                </ModalBody>
                <ModalFooter className='custom-modal-footer'>
                    {!isEmptyCart && <p className='mx-auto'>Promo code can be applied on payment page</p>}
                    <button className='checkout-btn' type='button' onClick={this.toggleModal}>
                        {isEmptyCart ? (
                            <Row className='mx-auto'>
                                <Col>Start Shopping</Col>
                            </Row>
                        ) : (
                            <Row className='text-left'>
                                <Col xs={4}>Proceed to Checkout</Col>
                                <Col xs={5} />
                                <Col xs={3}>Rs.{totalItemsPrice} &nbsp; &nbsp; &gt;</Col>
                            </Row>
                        )}
                    </button>
                </ModalFooter>
            </Modal>
        );
    };
};

const mapStateToProps = createSelector(
    [cartModalViewSelector, cartSelector],
    (showCartModalView, cart) => ({
        showCartModalView,
        cart,
        cartCountAndPrice: cart.reduce((acc, curr) => ({
            quantity: acc.quantity + curr.quantity,
            price: acc.price + (curr.quantity * curr.price)
        }), { quantity: 0, price: 0 })
    })
);
export default connect(mapStateToProps)(Cart);