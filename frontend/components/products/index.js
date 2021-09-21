import { useEffect, useState } from 'react';

import ProductMenu from '../productMenu';
import ProductCards from '../productCards';

import { ProductsWrapper } from 'styles/products.styled';

import { useFetch } from 'utils/customHooks';
import { ENDPOINTS } from 'utils/constants';

const Products = ({ query }) => {
  const url = process.env.API_URL + ENDPOINTS.PRODUCTS;

  const { data: allProducts, loading, error } = useFetch(url);

  const { categoryId } = query;

  const [activeProducts, setActiveProducts] = useState(null);

  useEffect(() => {
    if (allProducts) {
      if (!categoryId || +categoryId === -1) {
        setActiveProducts(allProducts);
      } else {
        setActiveProducts(
          allProducts.filter((pro) => pro.category === categoryId)
        );
      }
    }
  }, [categoryId, allProducts]);

  return (
    <ProductsWrapper>
      <ProductMenu />
      {activeProducts && activeProducts.length > 0 && (
        <ProductCards products={activeProducts} />
      )}
    </ProductsWrapper>
  );
};

export default Products;
