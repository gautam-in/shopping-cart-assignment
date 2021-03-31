import { Button, Drawer, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { useRouter, withRouter } from "next/router";

function CartContainer(props) {
  const noItemsStyles ={
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:`translate(-50%,-50%)`
  }
  const route = useRouter();
  function startShopping() {
    console.log("Start shopping");
    route.push({
      pathname: '/home'
    })
  }
  return (
    <div style={{ width: '100%' }}>
      <div style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '10px', marginBottom: '1rem', backgroundColor: 'black' , color:'white' }}>
          <p style={{ fontWeight: 700, fontFamily: 'sans-serif', margin: 0 }}>My Cart ( {props.total} items )</p>
        </div>
        {
          props.total != 0 &&
          <div >
            <div className="list-container" style={{ display: 'grid', fontFamily: 'sans-serif', padding: '10px', marginBottom: '1rem', backgroundColor: 'white' }}>
              {
                Object.keys(props.list).map((item) => {
                  return (
                    <CartItem key={item} item={props.list[item]} />
                  )
                })
              }
            </div>
            <div style={{ display: 'flex', padding: '10px', margin: '10px 0', backgroundColor: 'white' }}>
              <img src="static/images/lowest-price.png" />
              <span style={{ margin: 'auto' }}>You won't find  it cheaper anymore</span>
            </div>
          </div>
        }
        {
          props.total == 0 &&
          <div style={{
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:`translate(-50%,-50%)`
          }}>
            <h1>No Items in your Cart</h1>
            <p>Your favorite items are just a click away</p>
          </div>
        }
      </div>
      <div style={{ position: 'absolute', bottom: 0, width: '100%',textAlign:'center' }}>
        <div style={{ padding: '10px' }}>
          {
            props.total != 0 &&

            <div>
              <p>Promo code can be applied on payment page</p>
              <Button className="buttonW" size="small" variant="contained" color="secondary"
                style={{ width: '100%', height: '32px' }}
              >
                <span style={{ position: 'absolute', left: '10px' }}>Proceed to checkout </span>
                <span style={{ position: 'absolute', right: '10px' }}>
                  <span>Rs. {props.totalPrice}</span>
                </span>
              </Button>
            </div>

          }
          {
            props.total == 0 &&

            <Button className="buttonW" size="small" variant="contained" color="secondary"
              style={{ width: '100%', height: '32px' }}
              onClick={startShopping}
            >Start Shopping              </Button>
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.cartItems,
    total: state.totalItems,
    totalPrice: state.totalPrice
  }
}

export default connect(mapStateToProps)(CartContainer);