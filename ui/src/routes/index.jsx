import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Home1 = () => <div>Home</div>;
const About = () => <div>About</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<About />} />
        <Route path="/sign-up" element={<Home1 />} />
        <Route path="/products" element={<About />} />
        <Route path="/cart" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
