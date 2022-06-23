import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo2x from "../assets/logo_2x.png";
import { ReactComponent as CartLogo } from "../assets/cart.svg";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

const pages = ["Home", "Products"];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);

  let totalItems = 0;

  if (cartData && cartData.length > 0) {
    cartData.forEach((item) => {
      totalItems += item.buffer;
    });
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNav = (address) => {
    if (address === "Home") address = "";
    navigate(`/${address}`);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img className="navLogo" src={Logo2x} alt="logo.jpg" />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },
              marginLeft: 10,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNav(page)}
                sx={{
                  marginTop: 4,
                  color: "black",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <p className="navButtons">{page}</p>
              </Button>
            ))}
          </Box>

          <Box sx={{ paddingRight: { xs: 0, sm: 0, md: 20 } }}>
            <Box
              className="authButtons"
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "right",
                alignItems: "flex-end",
                padding: 0.5,
              }}
            >
              <button onClick={() => navigate("/login")}>
                <p>SignIn</p>
              </button>
              <button onClick={() => navigate("/signup")}>
                {" "}
                <p>Register</p>
              </button>
            </Box>
            <Cart
              handleClose={handleClose}
              handleOpen={handleOpen}
              open={open}
            />
            <button className="cartButton" onClick={handleOpen}>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: 70, sm: 60 },
                  width: 150,
                  cursor: "pointer",
                }}
              >
                <CartLogo fill="red" style={{ height: 40 }} />
                <p style={{ color: "black" }}>{`${totalItems} ${
                  totalItems > 1 ? "items" : "item"
                }`}</p>
              </Box>
            </button>
          </Box>
        </Box>
      </div>
    </AppBar>
  );
};
export default ResponsiveAppBar;
