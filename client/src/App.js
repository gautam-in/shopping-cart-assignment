import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

const App = () => {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;
