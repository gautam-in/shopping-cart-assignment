import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../Style/Cart.scss";
import "../Style/Popup.scss";
import lowPriceImg from "../static/images/lowest-price.png";

function Cart(props) {
    const { showCart, onHandleCart, cartList, onChangeItemCount } = props;
    const [totalAmt, setTotalAmt] = useState(0);
    useEffect(() => {
        let totalAmount = 0;
        cartList.forEach(element => {
            totalAmount += element.totalPrice;
        });
        setTotalAmt(totalAmount)
    }, [cartList]);

    const onHandleItemCount = (element, type) => {
        let count;
        let totalAmount;
        const maxStockCount = element.stock;
        if (type === "Decrement" && element.qnty !== 0) {
            count = element.qnty - 1;
            totalAmount = count * element.price;
            onChangeItemCount({ ...element, qnty: count, totalPrice: totalAmount });
        } else if (type === "Increment" && element.qnty < maxStockCount) {
            count = element.qnty + 1;
            totalAmount = count * element.price;
            onChangeItemCount({ ...element, qnty: count, totalPrice: totalAmount });
        }
    };
    const cartListItemCount = cartList.length;
    return (
        <div className="CartBackgroud">
            <Popup position="right center" open={showCart} closeOnDocumentClick onClose={() => onHandleCart(false)}>
                <div>
                    <div className="modal">
                        <div className="CartHeading">
                            <div className="HeadingTxt"> My Cart {cartListItemCount !== 0 && `(${cartList.length} ${cartListItemCount === 1 ? 'item' : 'items'})`}</div>
                            <div className="close" onClick={() => onHandleCart(false)}>X</div>
                        </div>
                        {cartListItemCount === 0 ?
                            <div className='EmptyCartContent'>
                                <div>No items in your cart</div>
                                <div>Your favourite items are just a click away</div>
                            </div>
                            :
                            <div className="CartContent">
                                {cartList?.map((ele, index) => (
                                    <div className='ListCon'>
                                        <div className='ItemImage'>
                                            <img src={ele.imageURL} alt={ele.name} width="60px" />
                                        </div>
                                        <div className='ItemDetails'>
                                            <div className='ItemName'>{ele.name}</div>
                                            <div className='ItemValues'>
                                                <div className='ItemCount'>
                                                    <button className='ItemCountChange' onClick={() => onHandleItemCount(ele, 'Decrement')}>-</button>
                                                    <div className='ItemCountVal'>{ele.qnty}</div>
                                                    <button className='ItemCountChange' onClick={() => onHandleItemCount(ele, 'Increment')}>+</button>
                                                </div>
                                                <div className='ItemPrice'>
                                                    <span>x </span>
                                                    Rs.{ele.price}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='ItemTotalPrice'>
                                            Rs.{ele.totalPrice}
                                        </div>
                                    </div>
                                ))}
                                <div className='ContentTag'>
                                    <img src={lowPriceImg} alt="Lowest price" width="100px" />
                                    <div>You won't find it cheaper anywhere</div>
                                </div>
                            </div>}
                        {cartListItemCount === 0 ?
                            <div className="CartBtnCon">
                                <button className='CartButton' onClick={() => onHandleCart(false)}>
                                    <div>Start Shopping</div>
                                </button>
                            </div>
                            :
                            <div className="CartBtnCon">
                                <div className='CartBtnLabel'>Promo code can be applied on payment page</div>
                                <button className='CartButton' onClick={() => onHandleCart(false)}>
                                    <div>Proceed to Checkout</div>
                                    <div>Rs.{totalAmt}<span>&gt;</span></div>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </Popup>

        </div>
    )
}
export default Cart;

