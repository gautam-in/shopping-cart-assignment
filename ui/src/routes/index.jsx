import { BrowserRouter, Routes, Route } from "react-router-dom";

import URLS from "../constants/urls";
import Home from "../pages/Home";

const Home1 = () => <div>Home</div>;
const About = () => <div>About</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={URLS.HOME} element={<Home />} />
        <Route path={URLS.PRODUCT_LIST} element={<About />} />
        <Route path={URLS.SIGN_IN} element={<Home1 />} />
        <Route path={URLS.REGISTER} element={<About />} />
        <Route path={URLS.CART} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
