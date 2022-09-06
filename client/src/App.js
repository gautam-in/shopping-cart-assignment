import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default App;
