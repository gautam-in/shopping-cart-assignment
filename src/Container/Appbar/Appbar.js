import React, { useEffect, useContext, useState } from "react";
import Main from "../../Component/Header/Index";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { MainUrl } from "../Constant/index";
import List from "@material-ui/core/List";
import Cart from "../Cart/Cart";
import Footer from "../../Component/Footer/index";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import { routeConfigList, routes } from "../../Routes";
import { CartContext, DrawerContext, ProductDataContext } from "../../App";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./Appbar.css";
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
    [theme.breakpoints.up("xs")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
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

export default function ClippedDrawer(props) {
  const navigate = useNavigate();
  const [menuactive, setmenuactive] = React.useState(props.Page);
  const [Show, SetShow] = useContext(DrawerContext);
  const [MenuValue, SetMenuValue] = useState("");
  let pathname = window.location.pathname.split("/");
  const [open, setopen] = useState(false);
  const handleClick = (event) => {
    setmenuactive(event);
  };

  useEffect(() => {
    setmenuactive(props.Page);
    SetMenuValue(pathname[2]);
  }, [props.Page]);
  const onOpen = () => {
    setopen(true);
  };
  const onClose = () => {
    setopen(false);
  };
  const handleChange = (e) => {
    console.log(props);

    navigate("/Product/" + e.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root} onClick={onClose}>
      <CssBaseline />
      <Main />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        id="leftDrawer"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {routeConfigList.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  handleClick(item.title);
                }}
                component={Link}
                to={item.path}
                className={menuactive == item.title ? "active" : ""}
              >
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main id="MainSection" className={classes.content}>
        <section id="DropdownBar" className="DropdownBar">
          <Select
            labelId="demo-simple-select-label"
            className="MobileSelect"
            id="demo-simple-select"
            value={MenuValue}
            onChange={handleChange}
          >
            <MenuItem value="fruit-and-veg">Fruits & Vegetables</MenuItem>
            <MenuItem value="bakery-cakes-dairy">
              Bakery Cakes and Dairy
            </MenuItem>
            <MenuItem value="beverages">Beverages</MenuItem>
            <MenuItem value="beauty-hygiene">Beauty & Hygiene</MenuItem>
            <MenuItem value="baby">Baby care</MenuItem>
          </Select>
        </section>
        <Cart />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
