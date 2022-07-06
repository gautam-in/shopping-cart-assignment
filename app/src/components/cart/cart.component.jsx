import { useEffect,useState } from "react";
import { connect,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decrementItem, incrementItem, removeItem } from "../../store/actions/cart.action";
import './cart.scss';

const Cart = ({  cartItems }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(null)

  useEffect(() => {
    let subtotal = 0;
    cartItems.map(cartProduct => {

      subtotal += cartProduct.count * cartProduct.price;
    })
    setTotalPrice(subtotal)

  }, [cartItems])

  const removeCartItem = (id) => {
    dispatch(removeItem(id))
  }

  const increment = (data) => {
    dispatch(incrementItem(data))

  }
  const decrement = (data) => {
    dispatch(decrementItem(data))
  }
  
  return (

    <div className="cart-section">
      <div className="cart-popup">
        <h4>  My Cart <span>({cartItems && cartItems.length} item)</span></h4>
        <div className="cart-content">
          {cartItems && cartItems.length > 0 && cartItems.map((items) => {
            return (
              <div className="cart-items" key={items.id}>
                <img
                  className="item-img"
                  src={items && items.imageURL}
                  alt="product"
                />
                <div className="item-price">
                  <div className="name">{items && items.name}</div>
                  <div className="price-section">
                    <div className="price-section-calculator">
                      <button className={items.count === 1 ? "price-btn disable" : "price-btn"}
                        onClick={() => decrement(items)}
                      >-</button>{items.count}
                      <button className="price-btn"
                        onClick={() => increment(items)}
                      >+</button>
                      <span
                        onClick={() => removeCartItem(items)}
                      >x</span>
                    </div>
                    <span>Rs.{(items && items.price) * items.count}</span>
                  </div>
                </div>
              </div>
            )
          })
          }
          
          {cartItems && cartItems.length === 0 &&
            <div className="cart-items">
              <div className="nocartItem">
                <div className="nocart">No Items in your cart </div>
                <div className="favourite">Your favourite items are just a click away</div>
              </div>
            </div>

          }
        </div>

        {cartItems && cartItems.length > 0 && <div className="cart-footer">
          <img src="/static/images/lowest-price.png" alt="lowest-price png" />
          <p>You won't find it cheaper anywhere</p>
        </div>}

        {
          cartItems && cartItems.length > 0 ? <div className="checkout-btn-sec">
            <span className="promo">
              Promo code can be applied on payment page.
            </span>
            <button className="btn-cls">
              Proceed to checkout Rs.{totalPrice}
            </button>
          </div> :
            <div className="checkout-btn-sec shopping-btn">
              <button className="btn-cls" onClick={() => navigate('/products')}>
                Start Shopping
              </button>
            </div>
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    cartItems: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)

