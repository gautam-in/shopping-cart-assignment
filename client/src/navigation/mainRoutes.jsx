import { Routes, Route } from 'react-router-dom';
import SignInContainer from '../pages/signIn/signInContainer';
import SignUpContainer from '../pages/signUp/signUpContainer';
import HomeContainer from '../pages/home/homeContainer';
import ProductsContainer from '../pages/products/productsContainer';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route path="/products/:id" element={<ProductsContainer />} />
        <Route exact path="/signIn" element={<SignInContainer />} />
        <Route exact path="/register" element={<SignUpContainer />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
