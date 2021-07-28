import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function CartModel() {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();
  //const history = useHistory();

  console.log(globalState)

  //const proceedToCard = () => history.push('/miniCart')

  return (
    <div className="container">
      <button type="button" className="btn cart-button" data-toggle="modal" data-target="#myModal">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-color" />
      0 items
      </button>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">My Cart</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
              <h5 className="model-footer-text">Promo code can be applied on payment</h5>
            </div>
            <button type="button" className="btn btn-danger btn-lg">Proceed to Checkout  </button>
          </div>
        </div>
      </div>

    </div>
  )
}

