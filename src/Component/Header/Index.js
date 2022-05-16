import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { Divider, Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import List from "@material-ui/core/List";
import { DrawerContext, CartContext, ProductDataContext } from "../../App";
import logo from "../../Component/image/logo.png";
import { Routes, Route, Link} from "react-router-dom";
import { routeConfigList, routes } from "../../Routes";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "./header.css";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Main() {
  const classes = useStyles();
  const [menuactive, setmenuactive] = React.useState("");
  const [Drawer, setDrawer] = useContext(DrawerContext);
  const [cartdata, setCartData] = useContext(CartContext);
  const [total, Settotal] = useContext(ProductDataContext);
  const handleClick = (event) => {
    setmenuactive(event);
  };
  const showDrawer = (event) => {
    setDrawer(!Drawer);
    // SetShow({ ...Show, [anchor]: open });
  };
  const count = () => {
    Settotal(
      cartdata.reduce(function(prev, cur) {
        return prev + cur.quantity;
      }, 0)
    );
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/" >
            <img src={logo} width="140px" />
          </Link>

          <span className="mainPage">
            <nav>
              <Link to="/" className="navigateLink Home">
                Home
              </Link>
            </nav>
            <nav>
              <Link
                to="/Product/fruit-and-veg"
                className="navigateLink ProductPage"
              >
                Product
              </Link>
            </nav>
          </span>
          <Typography className="actionCenter">
            <div className="actionFirst">
              <Link to="/Login" className="navigateLink SignInPage">
                <Button variant="outlined" style={{ margin: 3 }}>
                  SignIn
                </Button>
              </Link>
              <Link to="/Register" className="navigateLink RegisterPage">
                <Button variant="outlined" style={{ margin: 3 }}>
                  Register
                </Button>{" "}
              </Link>
            </div>
            <div className="actionSecond">
              <Button
                variant="outlined"
                className="cartClas"
                style={{ margin: 3 }}
                onClick={showDrawer}
              >
                <ShoppingCartIcon />
                {total ? total : 0} items
              </Button>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
