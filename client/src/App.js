
import React, { useState ,lazy,Suspense} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";
import serviceCallGet from "./serviceWrapper";
const Header = lazy(()=>import("./components/header"));
const Footer = lazy(()=>import("./components/footer"));
const Routes = lazy(()=> import("./Routes"));


function App() {
  const [cart, setCart] = useState(false);
  const [categories, setCats] = useState([]);
  const cart1 = useSelector((store) => store.cart);
  localStorage.setItem("cart", JSON.stringify(cart1));

  React.useEffect(() => {
    var url = "http://localhost:5000/categories";
    serviceCallGet(url,setCats);
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback = {<div> Loading ...</div>} >
        <Header setCart={setCart} cart={cart} />
             
        <Routes categories={categories} setCart={setCart} />
           
        <Footer/>
        
        </Suspense>
        </Router>
    </>
  );
}

export default App;
