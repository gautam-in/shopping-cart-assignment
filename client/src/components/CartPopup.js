import React, { Component } from 'react';
import { addToCart } from '../store/actions/cart';
import { connect } from 'react-redux';
import endpoints from '../config/endpoints';

class CartPopup extends Component {
    render() {
        return (
            <div className="dialog">
                <div className="dialog-wrapper">
                    <section className="dialog-title-section">
                        <div className="dialog-title">
                            <span className="title-label">My Cart </span>
                            {this.props.cart.length > 0 && <span>({this.props.totalItems} Item)</span>}
                        </div>
                        <div 
                        className="dialog-close" 
                        aria-label = "Close cart popup"
                        onClick={this.props.closePopup}>
                            &times;
                        </div>
                    </section>
                    {this.props.cart.length > 0 &&
                        <section className="dialog-body-section">
                            {this.props.cart.map(item => (
                                <div className="cart-item" key={item.name}>
                                    <div className="cart-item-image">
                                        <img src={endpoints.BASE_URL + item.imageURL} alt={item.name} />
                                    </div>
                                    <div className="cart-details">
                                        <div className="cart-item-name">
                                            {item.name}
                                        </div>
                                        <div className="cart-amounts">
                                            <div className="cart-item-quantity-section">
                                                <div
                                                    className="cart-item-subtract"
                                                    onClick={() => this.props.addToCart({
                                                        item: {
                                                            name: item.name,
                                                            quantity: -1,
                                                        }
                                                    })}>-</div>
                                                <div className="cart-item-quantity">
                                                    {item.quantity}
                                                </div>
                                                <div
                                                    className="cart-item-add"
                                                    onClick={() => this.props.addToCart({
                                                        item: {
                                                            name: item.name,
                                                            quantity: 1,
                                                        }
                                                    })}>+</div>
                                                <div className="cart-item-multiply">
                                                    &times;
                                                </div>
                                                <div className="cart-item-price">
                                                    {item.price}
                                                </div>
                                            </div>
                                            <div className="cart-item-total">
                                                {item.total}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="offer-info">
                                <img src='/static/images/lowest-price.png' alt="lowest price" />
                                <div className="offer-text">
                                    You won't find it cheaper anywhere
                                </div>
                            </div>
                        </section>
                    }

                    {this.props.cart.length === 0 &&
                        <div className="empty-cart-section">
                            <h5>No items in your cart</h5>
                            <h6>Your favorite items are just a click away</h6>
                        </div>
                    }

                    <footer className="dialog-footer">
                        {this.props.cart.length > 0 && <div className="promo-info">
                            Promo code can be applied on payment page
                        </div>}
                        <section className="checkout-section" onClick={this.props.closePopup}>
                            {this.props.cart.length > 0 
                            && <div className="checkout-label">
                                Proceed to Checkout
                            </div> }
                            {this.props.cart.length > 0 
                            && <div className="checkout-price">
                                Rs.{this.props.totalPrice} &nbsp;&nbsp;&nbsp;&gt;
                            </div>}
                            {this.props.cart.length === 0 && 
                                <div className = "start-shopping">Start Shopping</div>
                            }
                        </section>
                    </footer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    totalItems: [...state.cart.map(elem => elem.quantity)].reduce((total, current) => {
        total += current;
        return total;
    }, 0),
    totalPrice: [...state.cart.map(elem => elem.total)].reduce((total, current) => {
        total += current;
        return total;
    }, 0)
})

export default connect(mapStateToProps, { addToCart })(CartPopup);
