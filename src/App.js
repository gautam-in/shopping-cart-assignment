import React, { useState } from "react";
import "./App.scss";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import MiniCart from "./modules/MiniCart";
import HomePage from "./modules/HomePage";
import ProductListingPage from "./modules/ProductListingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  const [cart, setCart] = useState({});
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    // Provide the client to your App
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header cart={cart} setCartOpen={setCartOpen} />
          <Switch>
            <Route path="/product_listing">
              <ProductListingPage setCart={setCart} />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          {isCartOpen && (
            <MiniCart cart={cart} setCart={setCart} setCartOpen={setCartOpen} />
          )}
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
