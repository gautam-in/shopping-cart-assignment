import React, {useEffect, useState} from 'react'; 
import { updateCartdata } from "../../store/actions";
import { useSelector, useDispatch } from 'react-redux';
import "./_modal.scss"
  
const Modal = (props) =>
{
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.indexReducer.cartProduct);
  var cartCount = useSelector(state => state.indexReducer.count);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    setCartList(cartData);
  }, []);
  var cartValues = cartList;

  const cartEvent = (type, id) => {
    if(cartValues.length > 0)
    {
    for(let i=0; i<cartValues.length; i++)
    {
        for(let j=0; j<cartValues[i].product.length; j++)
        {
            if(cartValues[i].product[j].id == id)
            {
                if (type == 1) {
                    cartValues[i].quantity = cartValues[i].quantity + 1;
                    cartCount = cartCount + 1;
                    break;
                  } 
                else {
                    if (cartValues[i].quantity - 1 == 0) {
                      cartValues.splice(i, 1);
                      cartCount = cartCount - 1;
                      break;
                    } else {
                      cartValues[i].quantity = cartValues[i].quantity - 1;
                      cartCount = cartCount - 1;
                      break;
                    }
                }
            }
        }
    }
    dispatch(updateCartdata(cartValues, cartCount));
    }
  }
  return (
            <>
                <div className="products">
                {cartList.map((d, i) => (
                    <div className="grid-container">
                            {d.product.map((d1, i) => (<>
                        <div className="grid-item1 cartitem1"> 
                        <img src={d1.imageURL} alt={d1.name} className="cart-logo1 mr-2" />
                        </div>
                        <div className="grid-item1 cartitem2">
                            <strong>{d1.name}</strong>
                        </div>
                        <div className="grid-item1 cartitem3">
                            <div className="row">
                                <a><i className="fa fa-minus" onClick={() => cartEvent(0, d1.id)} aria-hidden="true"></i></a>
                                <p>{d.quantity}</p>
                                <a><i className="fa fa-plus"  onClick={() => cartEvent(1, d1.id)} aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="grid-item1 cartitem4">
                        * Rs.{d1.price}
                        </div> 
                        <div className="grid-item1 cartitem5">
                            Rs.{d1.price * d.quantity}
                        </div></>))}
                    </div>
                    ))}
                </div>
                {cartList.length > 0 && <div className="card cart-alter">
                    <div className="row m-2">
                        <div className="col-sm-5">
                            <img src="static/images/lowest-price.png" alt="lowest price image" className="cart-logo mr-3" />
                        </div>
                        <div className="col-sm-7">
                            <p className="modalp">You wont find it cheaper anywhere</p>
                        </div>
                    </div>
                </div>}
                {cartList.length === 0 && <div className="empty-content" id="eptcontent">
                <h6><strong>No items in your cart</strong></h6>
                <p>Your favourite items are just a click away</p>
                </div> }
            </>
        );
}
  
export default Modal;