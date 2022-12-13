import type { FunctionComponent } from "react";
import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import { useSelector, useDispatch } from "react-redux";
import { type RootState , type AppDispatch} from "../../store";
import  {incrementCartItemCount, decrementCartItemCount, removeCartItem} from '../../store/slices/products';

const Cart: FunctionComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.Products.entities.cartItems || []
  );

  const subtotal = cartItems.length ? cartItems.reduce((sum: number,item: any) => {
    return sum += item?.count * item?.price;
  }, 0) : 0;

  const grandTotal = subtotal ? (subtotal + 1 + 2) : 0;

  return (
    <>
      <div className="cart__details">
        <MetaInfo {...getRouteMetaInfo("Cart")} />
        <div className="cart__heading">
          <h3 className="heading-3">Cart</h3>
        </div>
        <div className="cart">
          <div className="cart__titles">
            <div className="cart__titles--title-1">Item</div>
            <div className="cart__titles--title-2">Description</div>
            <div className="cart__titles--title-3">Price</div>
            <div className="cart__titles--title-4">Quantity</div>
            <div className="cart__titles--title-5">Options</div>
            <div className="cart__titles--title-6">Total</div>
          </div>
          {cartItems.length ?
            cartItems.map((item: any) => {
              return (<div className="cart__items">
                <div className="cart__items--item">
                  <img
                    src={require(`src/containers${item?.imageURL}`)}
                    alt="Apple"
                  />
                </div>
                <div className="cart__items--desc">
                  <h4 className="heading-4">{item?.name}</h4>
                  <p className="paragraph">
                    {
                      item?.description
                    }
                  </p>
                </div>
                <div className="cart__items--price">${item?.price}</div>
                <div className="cart__items--quantity">
                  <button className="btn btn--explore" onClick={() => dispatch(incrementCartItemCount({id: item?.id}))}>&#43;</button>
                  <input type="text" value={item.count} placeholder="0" />
                  <button className="btn btn--explore" onClick={() => dispatch(decrementCartItemCount({id: item?.id}))}>&minus;</button>
                  <span>&nbsp;&#215;&nbsp;${item?.price}</span>
                </div>
                <div className="cart__items--options">
                  <button className="btn btn--explore" onClick={() => dispatch(removeCartItem({id: item?.id}))}>REMOVE</button>
                </div>
                <div className="cart__items--total">${item.count * item?.price}</div>
              </div>);
            }) :( <div>No items added to the cart.</div>)}
        </div>
        <div className="checkout">
          <div className="sub-total">Sub Total:</div>
          <div className="sub-total-value">${subtotal}</div>
          <div className="tax">Tax(5%):</div>
          <div className="tax-value">$1</div>
          <div className="shipping">Shipping:</div>
          <div className="shipping-value">$2</div>
          <div className="grand-total">Grand Total:</div>
          <div className="grand-total-value">${grandTotal}</div>
          <button className="btn checkout__btn">checkout</button>
        </div>
      </div>
      <div className="proceed">
        <p className="paragraph">Promo code can be applied on payment page</p>
        <div className="proceed__checkout">Proceed checkout</div>
        <div className="proceed__price">${grandTotal} &nbsp;&nbsp;&gt;</div>
      </div>
    </>
  );
};

export default Cart;
