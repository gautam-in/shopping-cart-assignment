import React from 'react';
import {
  useParams
} from "react-router-dom";
import Menu from './components/Menu';
import ProductListContainer from './components/ProductListContainer';
import Footer from './components/Footer';

function ProductList() {
  const params = useParams();
  return (
    <div className="page-container">
      <Menu />
      <ProductListContainer category={params.category} />
      <Footer />
    </div>
  );
}

export default ProductList;
