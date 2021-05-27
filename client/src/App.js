import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./router/Router";
import * as AuthenticateAPI from "./axios/AuthenticationAPI";

function App() {
  const [categories, setCategories] = React.useState([]);
  const [cartDialog, setCartDialog] = React.useState(false);
  React.useEffect(() => {
    AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/categories`)
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div data-test="Component-App">
      <Header cartDialog={cartDialog} setCartDialog={setCartDialog} />
      {categories.length > 0 && <Router categories={categories} />}
      <Footer />
    </div>
  );
}

export default App;
