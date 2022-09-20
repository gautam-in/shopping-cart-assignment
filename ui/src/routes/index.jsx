import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PAGE_URL } from "../constants";
import { Home, Login } from "../pages";

const Home1 = () => <div>Home</div>;
const About = () => <div>About</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGE_URL.HOME} element={<Home />} />
        <Route path={PAGE_URL.PRODUCT_LIST} element={<About />} />
        <Route path={PAGE_URL.SIGN_IN} element={<Login />} />
        <Route path={PAGE_URL.REGISTER} element={<About />} />
        <Route path={PAGE_URL.CART} element={<Home1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
