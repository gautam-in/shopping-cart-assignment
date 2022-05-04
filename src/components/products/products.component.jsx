import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import { ProductsContext } from '../../contexts/products.context';
import { CategoriesContext } from '../../contexts/categories.context';

import { MainContainer, CategoriesContainer, ProductsContainer } from './products.styles';

const Products = () => {
  const { key } = useParams();
  const { products } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);

  let filteredProducts = products

  if (key) {
    const category = categories.find(c => c.key === key);
    filteredProducts = products.filter(pdt => pdt.category === category.id);
  }

  const navigate = useNavigate();

  const clickHandler = (key) => {
    navigate(`/products/${key}`);
  }

  return (
    <MainContainer>
      <CategoriesContainer>
        {categories &&
          categories.map(category => (
            <div key={category.id} onClick={() => clickHandler(category.key)}>{category.name}</div>
          ))
        }
      </CategoriesContainer>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </MainContainer>
  );
};

export default Products;
