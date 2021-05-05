import React from 'react'; 
import { Link } from 'react-router-dom';
import Modal from "./modal";
import "../sass/_header.scss"
import { useSelector } from 'react-redux';
const Header = () =>
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
            <header>
                <div className="container mb-1">  
                    <nav aria-label="Navigation">
                        <div className="row">
                            <img src="static/images/logo.png" tabIndex="0" alt="sabka bazaar logo" className="logo" />
                            <ul className="main-nav nav1">
                                <Link to="/" aria-current="page"><li>Home</li></Link>
                                <Link to="/products"><li>Products</li></Link>
                            </ul>
                            <div className="header-right">
                            <ul className="main-nav nav2">
                                <Link to="/login"><li>SignIn</li></Link>
                                <Link to="/register"><li>Register</li></Link>
                            </ul>
                            <button className="cart-icon d-none d-xl-block" data-toggle="modal" data-target="#myModal"><i className="fa fa-shopping-cart cart-fa" aria-hidden="true"></i><span id="cartcount">{cartCount}</span> Items</button>
                            <Link to="/cart" className="cart-icon d-block d-xl-none"><i className="fa fa-shopping-cart cart-fa" aria-hidden="true"></i><span id="cartcount">{cartCount}</span> Items</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">My Cart</h6>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                        <Modal/>
                        </div>
                        <div className="modal-footer">
                            {cartData.length > 0 && <><p>Promo code can be applied on payment page</p>
                                <button type="button" className="btn btn-dark btnwid" data-dismiss="modal">
                                <p className="chk">Proceed to Checkout</p>
                                <p className="total" id="totalamt">{total}</p>
                                </button></> }
                            {cartData.length === 0 &&  <button type="button" className="btn btn-dark btnwid" data-dismiss="modal">
                                    Start Shopping
                                </button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
  
export default Header;