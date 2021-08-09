import React from "react";
import { connect } from "react-redux";
import { changecartstatus } from "../../redux/cart/cartAction";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    color: "black",
    height: "50px",
    boxShadow: "0px 4px 4px #E5E5E5",
  },
  toolBar: {
    height: "100%",
    padding: 0,
    minHeight: "10px",
    width: "100%",
  },
  topLogoContainer: {
    height: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },

  logo: {
    width: "100px",
    display: "flex",
    height: "30px",
  },
  logoName: {
    height: 50,
    display: "flex",
    color: "#114EB1",
    paddingLeft: 5,
    alignItems: "center",
  },
  logoNameText: {
    fontSize: 14,
    lineHeight: "125.2%",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Gotham A, Gotham B",
    color: "red",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  homeBtn: {
    padding: "0 10px",
  },
  rightButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "50px",
    alignItems: "center"
  },
  registerBtn: {
    marginRight: "20px",
  },
  loginBtn: {
    marginRight: "20px",
  },
  cartBtn: {
   cursor: "pointer",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cartIcon: {
      width: "30px",
      height: "30px"

  },
  linkStyles: {
      textDecoration: "none",
      color: "black"
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  const cartValue = props.cartproductsData.cartproducts.reduce(
    (sum, item) => sum + item.count,
    0
  );
  return (
    <div className={classes.root}>
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
      <div className={classes.topLogoContainer}>
        <div className={classes.logo}>
          <img 
          src="/static/images/logo.png"
          alt="logo"
          className={classes.logo}
          />


        </div>
        </div>


      <div className={classes.homeBtn}>
          <Link to={'/home'} className={classes.linkStyles}>
          Home
          </Link>
       
      </div>
      <div className={classes.productBtn}>
          <Link to={'/products'} className={classes.linkStyles}>
          Products
          </Link>
      
      </div>
      <div className={classes.rightButtons}>
        <div className={classes.registerBtn}>
            <Link to={'/signup'} className={classes.linkStyles}>
            Sign In
            </Link>
         
        </div>
        <div className={classes.loginBtn}>
            <Link to={'/login'} className={classes.linkStyles}>
            Login
            </Link>
         
        </div>
        <div className={classes.cartBtn} onClick={() => props.changecartStatus()}>
      <img src="/static/images/cart.svg" 
       alt="cart"
       className={classes.cartIcon}
       
       />
        <span style={{paddingBottom: "20px"}}> {cartValue} </span>
     
    </div>
      </div>
      </Toolbar>
    </AppBar>
  </div>

  );
};

const mapStateToProps = (state) => {
  return {
    cartproductsData: state.cartproducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changecartStatus: () => dispatch(changecartstatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
