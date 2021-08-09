import { BrowserRouter, Route, Switch } from "react-router-dom";
import signupPage from "./components/userAuth/register";
import LoginPage from "./components/userAuth/login";
import NavBar from "./components/common/navBar";
import React, { Suspense } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Home from "./components/home/homePage";
import Productlandingpage from "./components/products/productPage";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
const Cart = React.lazy(() => import("./components/cart/cart"));


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: `calc(100% - 50px)`,
    overflow: "auto",
    transform: `translate(0, 50px)`,
    backgroundColor: "#FFFFFF",
  },
  container: {
    width: "100%",
    height: "100%",
    overflow: "auto"
  },
  root: {
    display: "flex",
    background: "#FFFFFF",
    opacity: 1,
    maxHeight: "100vh",
    maxWidth: "100vw",
  },
}));
const StyledContainer = withStyles((theme) => ({
  root: {
    padding: "0px",
    width: "100%",
    height: `calc(100% - 60px)`
  },
}))(Container);



function App() {
  const classes = useStyles();
  let theme = createTheme({

    "@global": {},
    breakpoints: {
      values: {
        xsmall: 800,
        small: 1280,
        medium: 1440,
        large: 1920,
      },
    },

    typography: {
      fontSize: 12,
      color: "black",
      fontFamily: "Gotham A,Gotham B",
    },

  });
  theme = responsiveFontSizes(theme);
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <NavBar />
        <main className={classes.content}>
          <StyledContainer className={classes.container}>
            <Switch>
              <Route path="/signup" component={signupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/home" component={Home} />
              <Route path="/products" component={Productlandingpage} />
              <Route path="/Cart" component={Cart} />
              </Switch>
  
              <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
              

   
          </StyledContainer>
        </main>
      </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
