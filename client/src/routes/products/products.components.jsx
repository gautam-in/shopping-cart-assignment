import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListingSidebar from '../../components/category-sidebar/category-sidebar';
import CustomControl from '../../components/custom-select/custom-select.component';
import ProductList from '../../components/ProductsList/product-list.component';
import {
  selectCategories,
  selectCurrentCategory,
} from '../../store/categories/categories.selector';
import { fetchProductsStartAsync } from '../../store/products/products.actions';
import { selectProducts } from '../../store/products/products.selector';

import { ProductContainers } from './product.styles';

const Products = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const currentCategory = useSelector(selectCurrentCategory);
  const products = useSelector(selectProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProductsStartAsync());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const filteredProducts = products?.filter(
      (product) => product.category === currentCategory
    );
    // setProducts(filteresProducts);
    if (currentCategory) {
      setFilteredProducts(filteredProducts);
    }
  }, [currentCategory, products]);

  return (
    <ProductContainers>
      <ProductListingSidebar categories={categories} />
      <CustomControl categories={categories} />
      <ProductList products={filteredProducts} />
    </ProductContainers>
  );
};

export default Products;
