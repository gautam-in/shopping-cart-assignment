import { Button, Drawer, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContainer from './CartContainer'
import { connect } from "react-redux";
import * as actionTypes from '../store/actions'
import React from "react";
const useStyles = makeStyles(() => ({
  button: {
    borderRadius: '0',
    fontSize:'12px',
    fontFamily:'Dosis',
    margin:'12px'
  },
}));
function Cart(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  return (
    <div>
      {
        props.isLogIn &&
        <div>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            onClick={toggleDrawer('right', true)}
            startIcon={<ShoppingCartIcon />}
          >
            {props.count} Items
          </Button>
          {/* <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", background: "#ccc" }}>
            <img src='../static/images/cart.svg' width={30} />
            <p>0 items</p>
          </div> */}
          <Drawer className="Cart-Drawer" classes="cart-draw" anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            <CartContainer />
          </Drawer>
        </div>
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    count: state.totalItems,
    isLogIn: state.isLoggedIn
  }
}
export default connect(mapStateToProps)(Cart);