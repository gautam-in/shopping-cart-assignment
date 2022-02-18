import React,{useContext} from "react";
import "./checkout.styles.scss";
import { MyContext } from "../../App";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
function CheckoutPage() {

    const cart = useContext(MyContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
        </div>
        {
            cart.cartItems.map(cartItem=>
            <CheckoutItem  
                key={cartItem.id}
                cartItem={cartItem}/>)
        }
      
      <div className="total">
        <span>Total:{cart.calculateTtotal()}</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
