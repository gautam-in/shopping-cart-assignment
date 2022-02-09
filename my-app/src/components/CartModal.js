import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartModal.scss";
import { AddCartItems, RemoveCartItems } from "../actions/actions";

function CartModal(props) {
    const dispatch = useDispatch();
    const { productlist } = useSelector(store => store);
    var cartItems = [];
    var cartItemsCount = 0;
    props.items.map((item) => {
        var cartProduct = productlist.filter((el) => {
            return el.id === item.id
        });
        cartItems = [...cartItems, { ...cartProduct, count: item.count }];
        cartItemsCount = cartItemsCount + item.count;
    });

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">My Cart</h5>
                        {cartItemsCount !== 0 && <span>({cartItemsCount} items)</span>}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {cartItems.map((item) => {
                            return (<div className="cart-item row m-0 col-12" key={item[0].id}>
                                <img src={item[0].imageURL} className="col" />
                                <div className="cart-item__price col">
                                    <h6>{item[0].name}</h6>
                                    <div className="cart-item__btn">
                                        <button onClick={() => dispatch(RemoveCartItems(item[0].id))}><i className="fa fa-minus-circle" aria-hidden="true"></i></button>
                                        <p>{item.count}</p>
                                        <button onClick={() => dispatch(AddCartItems(item[0].id))}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                        <p> Rs.{item[0].price}</p>
                                    </div>
                                </div>
                                <p className="total_price col">Rs.{item[0].price * item.count}</p>
                            </div>)
                        })}
                        {cartItemsCount !== 0 && <div className="lowest-price__section">
                            <img src="/static/images/lowest-price.png" alt="lowest price logo" />
                            <p>You won't find it cheaper anywhere</p>
                        </div>}
                        {cartItemsCount == 0 && <div className="no-items__section">
                            <h6>No items in your cart</h6>
                            <p>Your favorite items are just a click away</p>
                        </div>}
                    </div>
                    <div className="modal-footer">
                        {cartItemsCount !== 0 && <div style={{width: "100%"}}><p>Promo code can be applied on payment page.</p>
                            <button className="btn-danger" data-dismiss="modal">
                                Proceed to Checkout
                            </button></div>}
                            {cartItemsCount == 0 && <button className="btn-danger" data-dismiss="modal">
                                Start Shopping
                            </button> }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartModal;