import './App.css';
import { CartPage, HomePage, LoginPage, ProductListingPage, SignupPage } from './pages/index-page';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "login" element = {<LoginPage />} />
        <Route path = "signup" element = {<SignupPage />} />
        <Route path = "cart" element = {<CartPage />} />
        <Route path = "products" element = {<ProductListingPage />}>
          <Route path = "cart" element = {<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
