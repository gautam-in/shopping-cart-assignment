import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ButtonBase as Button, Container, Drawer } from "@mui/material";
// import logo from "../../../../static/images/logo.png";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="md">
          <Toolbar>
            <Link to="/">
              <img
                // src={logo}
                src="/images/logo.png"
                srcSet="/images/logo_2x.png 1.5x, /images/logo_2x.png 2x"
                alt="sabka-bazaar-logo"
                loading="lazy"
                width="140"
                height="70"
              />
            </Link>
            <nav className="nav">
              <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
              </div>
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Button onClick={toggleDrawer} className="button-cart">
                  <img
                    src="/images/cart.svg"
                    alt="cart"
                    className="icon-cart"
                  />
                </Button>
                <Drawer
                  anchor={"right"}
                  open={isDrawerOpen}
                  onClose={toggleDrawer}
                >
                  <div className="empty-cart-message">
                    <p>
                      <strong>No items in your cart</strong>
                    </p>
                    <p>Your favorite items are just click away</p>
                  </div>
                </Drawer>
              </div>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Header;
