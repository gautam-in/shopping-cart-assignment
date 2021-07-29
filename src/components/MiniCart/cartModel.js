import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import { Grid } from '@material-ui/core'



export default function CartModel() {
  const { cartReducer } = useSelector(state => state);
  const dispatch = useDispatch();


  console.log(cartReducer)


  return (
    <div className="container">
      <button type="button" className="btn cart-button" data-toggle="modal" data-target="#myModal">
        <FontAwesomeIcon icon={faShoppingCart} className="cart-color" />
        {
          cartReducer.length
        } items
      </button>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">My Cart</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              {
                cartReducer.length > 0 && cartReducer.map((cart, index) => {
                  return <Grid container>
                    <Grid item xs={3}>
                      <img className="products-width" src={cart.imageURL} alt="products" className="imageUrl" />

                    </Grid>
                    <Grid container xs={9}>


                      <h2 className="products-title">{cart.name}</h2>
                      <Grid conatiner item lg={10}>
                        <button className="btn btn-danger">+</button>
                        <h2 className="products-title">{cart.price}</h2>
                        <button className="btn btn-danger">-</button>
                      </Grid>

                      <Grid item lg={2}>
                        <h2 className="products-title">{cart.price}</h2>
                      </Grid>
                    </Grid>

                  </Grid>
                })
              }
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

