import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import { Grid } from '@material-ui/core'
import EmptyCart from './EmptyCart';
import cartLogo from '../../images/lowest-price.png'


export default function Cart() {
  const { cartReducer } = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(cartReducer)


  return (
    <div className="container">
      <div data-toggle="modal" data-target="#myModal" style={{cursor:"pointer"}}>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-color" />
        {
          cartReducer.length
        } items
        </div>
     
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">My Cart</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              {
                cartReducer.length <= 0  ? <EmptyCart /> : cartReducer.map((cart, index) => {
                  return <Grid container>
                    <Grid item xs={3} sm={3} lg={3} md={3}>
                      <img className="products-width" src={cart.imageURL} alt="products" className="imageUrl" />
                    </Grid>
                    <Grid container xs={9} sm={9} lg={9} md={9}>
                    <Grid item sm={12} lg={12} md={12} xs={12}>
                      <h2 className="cart-prod-title">{cart.name}</h2>
                      </Grid>

                      <Grid item sm={2} lg={2} md={2} xs={2}>
                      <button className="btn btn-danger cart-minus-btn">-</button>
                      </Grid>
                        <Grid item sm={1} lg={1} md={1} xs={1}>
                        <h2 className="products-title">1</h2>
                        </Grid>
                        <Grid item sm={2} lg={2} md={2} xs={2}>
                        <button className="btn btn-danger cart-add-btn">+</button>
                      </Grid>
                     
                      <Grid item sm={2} lg={2} md={2} xs={2}>
                      <h2 className="products-title">  x Rs.{cart.price} </h2>
                      </Grid>
                     
                      <Grid item sm={3} lg={3} md={3} xs={3}></Grid>
              
    
                      <Grid item sm={2} lg={2} md={2} xs={2}>
                        <h2 className="products-title">Rs. {cart.price}</h2>
                      </Grid>
                    </Grid>


                  <Grid container className="cartlogo-background mb-3 mt-3">
                    <Grid item lg={3} sm={3} md={3} xs={2}>
                      <img src={cartLogo} alt="lowest price logo" className="cartLogo-responsive" />
                    </Grid>
                    <Grid item lg={9} sm={9} md={9} xs={9}>
                    <p className="lowest-price-text">You won't find it cheaper anywhere</p>
                    </Grid>
                  </Grid>
                  </Grid>
                
                })
              }
            </div>
            <div className="modal-footer">
            {
                cartReducer.length <= 0 ? <Grid lg={12} md={12} sm={12} xs={12}>
                <button type="button" 
                className="btn btn-danger checkout-btn" 
                data-dismiss="modal"
                onClick={() => {
                  history.push("/products");
                }}
                
                >
                Start shoping
                </button>
                </Grid>  : <Grid item lg={12} md={12} sm={12} xs={12}>
              <h5 className="model-footer-text text-center">Promo code can be applied on payment</h5>
              <button type="button" className="btn btn-danger btn-lg checkout-btn" data-dismiss="modal">
             <span>Proceed to Checkout</span>
            </button>
              </Grid>
           
          } 
            </div>
            
            <span>
           {/* { 
          <p></p> 
           } */}
                    {/* {`Rs.
                ${cartReducer.reduce((total, item) => {
                  return total + item.quantity * item.price;
                }, 0)}  >`} */}
                  </span>
            
          </div>
        </div>
      </div>

    </div>
  )
}

