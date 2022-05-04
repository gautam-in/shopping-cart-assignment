import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';


import { CategoryContainer } from './category.styles';
import { ProductsContext } from '../../contexts/products.context';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
  const { key } = useParams();
  const { categories } = useContext(CategoriesContext);
  const { products } = useContext(ProductsContext);

  const category = categories.find(c => c.key === key);
  const categoryProducts = products.filter(pdt => pdt.category === category.id);

  return (
    <CategoryContainer>
      {categoryProducts &&
        categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryContainer>
  );
};

export default Category;
