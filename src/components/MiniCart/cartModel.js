import React from 'react';
import { useHistory } from 'react-router-dom';


export default function CartModel(){

const history = useHistory();

const proceedToCard  = () => history.push('/miniCart')

return (
<div className="container">
  <button type="button" className="btn cart-button" data-toggle="modal" data-target="#myModal">Mini cart</button>
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
        <h4 className="modal-title">My Cart (0 items)</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <p>Some text in the modal.</p>
          <p>Some text in the modal.</p>
          <p>Some text in the modal.</p>
          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          <h5 className="model-footer-text">Promo code can be applied on payment</h5>
        </div>
        <button type="button" className="btn btn-danger btn-lg" onClick={proceedToCard}>Proceed to Checkout  </button>
      </div>
    </div>
  </div>
  
</div>
)
}