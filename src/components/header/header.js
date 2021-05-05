import React from 'react'; 
import Modal from "../modal/modal";
import Navigation from "../navigation/navigation"
import "./_header.scss"
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
                    <Navigation cartCount={cartCount}/>
                </div>
            </header>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <span className="d-block d-lg-none mr-3"><Navigation cartCount={cartCount}/></span>
                        <div className="modal-header">
                            <h5 className="modal-title"><strong>My Cart ({cartCount} item)</strong></h5>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                        <Modal/>
                        </div>
                        <div className="modal-footer">
                            {cartData.length > 0 && <><p>Promo code can be applied on payment page</p>
                                <button type="button" className="btn btn-dark btnwid" data-dismiss="modal">
                                <p className="chk m-0">Proceed to Checkout</p>
                                <p className="total m-0" id="totalamt">{total} <i className="fa fa-angle-double-right" aria-hidden="true"></i></p>
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