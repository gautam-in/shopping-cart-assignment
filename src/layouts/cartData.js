import React from 'react'; 
import Modal from '../components/modal'
import { useSelector } from 'react-redux';

const CartData = () =>
{
    const cartData = useSelector(state => state.indexReducer.cartProduct);
    const cartCount = useSelector(state => state.indexReducer.count);
    var cartValues = cartData;
    var total = 0;
    if(cartValues.length > 0)
    {
        for(let i=0; i<cartValues.length; i++)
        {
            for(let j=0; j<cartValues[i].product.length; j++)
            {
                total = total + (cartValues[i].product[j].price * cartValues[i].quantity);
            }
        }
    }
  return (
        <>
            <section className="cart-back">
                <h2 className="modal-title"><strong>My Cart ({cartCount} Item)</strong></h2>
            </section>
            <section className="cart-back">
            <Modal/>
            </section>
            <div className="cart-footer">
                {cartData.length > 0 && <><p>Promo code can be applied on payment page</p>
                    <button type="button" className="btn btn-dark btnwid">
                    <p className="chk">Proceed to Checkout</p>
                    <p className="total" id="totalamt">{total}</p>
                    </button></> }
                {cartData.length === 0 &&  <button type="button" className="btn btn-dark btnwid">
                        Start Shopping
                    </button>}
            </div>
        </>
  );
}
  
export default CartData;