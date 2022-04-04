import { useEffect, useState } from 'react';

import { get } from '../../utils/apis';

import { ProductContainers } from './product.styles';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    get('products').then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <ProductContainers>
      <div>Side Bar </div>
      <div>
        {products.map((product) => (
          <h2 key={product.id}>{product.name}</h2>
        ))}
      </div>
    </ProductContainers>
  );
};

export default Products;
