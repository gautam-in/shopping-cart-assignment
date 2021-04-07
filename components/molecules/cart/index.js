import { Button, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from "react-redux";
import React from "react";
import CartContainer from "../cartContainer/index";
import CartButton from "../../atoms/cart";
const useStyles = makeStyles({
  root: {
    width: 100,
    textAlign:'center'
  },
  button: {
    borderRadius: 0,
    color: "white",
    fontFamily:'Dosis'
  }
});
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
    <div className={classes.root}>
      {
        props.isLogIn &&
        <div>
          <CartButton count= {props.count} onClick = { toggleDrawer('right', true)}/>
          <Drawer className="Cart-Drawer" anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
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