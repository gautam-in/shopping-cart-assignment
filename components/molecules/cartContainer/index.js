import { Button, Drawer, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useRouter, withRouter } from "next/router";
import CartItem from "../cartItem/index";
import Image from "../../atoms/image";
import LowPrice from "../../atoms/low_price_promotion";
import NoItemsInCart from "../../atoms/noItemsInCart";
import CartContainerStyles from "./index.style";
import CartCheckout from "../cartCheckout";

function CartContainer(props) {
  const route = useRouter();
  function startShopping() {
    route.push({
      pathname: '/home'
    })
  }
  return (
    <CartContainerStyles>
      <div style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '10px', marginBottom: '1rem', backgroundColor: 'black', color: 'white' }}>
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
            <LowPrice />
          </div>
        }
        {
          props.total == 0 &&
          <NoItemsInCart />
        }
      </div>
      <div style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
        <div style={{ padding: '10px' }}>
          {
            props.total != 0 &&
            <CartCheckout totalPrice={props.totalPrice} />

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
    </CartContainerStyles>
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