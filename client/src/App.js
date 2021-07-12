import React from "react";
import { useDispatch,useSelector } from "react-redux";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./router/Router";
import { getCategoriesAction } from "./store/action";


function App() {
  const categories =  useSelector(state => state.categories)
  const dispatch = useDispatch();
  const [cartDialog, setCartDialog] = React.useState(false);
  React.useEffect(() => {
    dispatch(getCategoriesAction())
  }, []);
  
  
  return (
    <div data-test="Component-App">
      <Header cartDialog={cartDialog} setCartDialog={setCartDialog} />
      {categories && categories.length > 0 && <Router categories={categories} />}
      <Footer />
    </div>
  );
}

export default App;
