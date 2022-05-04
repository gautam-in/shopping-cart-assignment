import { Routes, Route } from 'react-router-dom';

import Products from '../../components/products/products.component';

const ProductsList = () => {
  return (
    <Routes>
      <Route index element={<Products />} />
      <Route path=':key' element={<Products />} />
    </Routes>
  );
};

export default ProductsList;
