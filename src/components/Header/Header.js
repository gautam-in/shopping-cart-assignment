import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import logo from "../../static/images/logo.png";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Cart from "./CartIcon/Cart";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const windowWidth = window.matchMedia("(max-width: 700px)");

function Header(props) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Paper
        sx={{
          p: 0.5,
          margin: "auto",
          maxWidth: "100%",
          flexGrow: 1,
          backgroundColor: "#fff",
        }}
      >
        <Grid container spacing={2} xs={12} sm={12} md={12}>
          <Grid
            item
            md={2}
            sx={{
              ml: 2,
            }}
            className="logo logoSize"
          >
            <Img alt="logo" src={logo} />
          </Grid>

          <Grid item xs={8} md={9.5} sm={8.5} container>
            {props.auth && (
              <Grid
                item
                xs={6.5}
                sm={6}
                md={8}
                container
                spacing={isSmall ? 1.5 : 3}
                className="home"
              >
                <Grid item>
                  <Typography variant="body1" aria-label="Home">
                    <Link
                      style={{ textDecoration: "none", color: "grey" }}
                      to="/home"
                      className="smallHome"
                    >
                      Home
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" aria-label="Products">
                    <Link
                      style={{ textDecoration: "none", color: "grey" }}
                      to="/products"
                      className="smallHome"
                    >
                      Products
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            )}

            {!props.auth ? (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                container
                spacing={2}
                className="headerRight"
              >
                <Grid item container spacing={2} className="signInRegister">
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      aria-label="sign-in"
                      className="smallfont"
                    >
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/"
                      >
                        Signin
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      aria-label="register"
                      className="smallfont"
                    >
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/register"
                      >
                        Register
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid
                item
                xs={3}
                sm={4}
                md={4}
                container
                spacing={2}
                className="headerRight"
              >
                <Grid item container className="signInRegister">
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        aria-label="Logout"
                        className="smallfont"
                        gutterBottom
                      >
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/"
                          onClick={() => {
                            sessionStorage.clear();
                            props.setIsAuth(false);
                          }}
                        >
                          Logout
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid className="home" item alignSelf={"end"}>
                      <Cart />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Header;
