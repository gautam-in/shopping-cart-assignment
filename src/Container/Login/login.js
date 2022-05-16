import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Header from "../../Component/Header/Index";
import Footer from "../../Component/Footer/index";
import Cart from "../Cart/Cart";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function login() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className="mlogin">
        <div className="firstPart">
          <div>
            <h1>Login</h1>
          </div>
          <div style={{ paddingTop: "8%" }}>
            Get access to your Orders.Wishlist and Recommendations
          </div>
        </div>
        <div className="secondPart">
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField id="standard-basic" label="Email" />
            </div>
            <div>
              <TextField id="standard-basic" label="Password" />
            </div>

            <div>
              <Button
                className="login-btn"
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
            </div>

            {/* <TextField id="outlined-basic" label="Outlined" variant="First Name" /> */}
          </form>
        </div>
      </div>
      <Cart />
      <Footer />
    </>
  );
}
