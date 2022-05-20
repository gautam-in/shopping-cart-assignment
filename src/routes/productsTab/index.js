import { Routes, Route } from 'react-router-dom';
import Products from '../../components/products';
const ProductsTab = () => {
    return (
      <Routes>
            <Route index element={<Products/>}/>
            <Route path=':category' element={<Products/>}/>
      </Routes>
  );
}

export default ProductsTab;
