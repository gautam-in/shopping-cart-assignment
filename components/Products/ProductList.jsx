/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../../styles/ProductList.module.css';

export default function ProductList({ productsData }) {
  const appliedFilters = useSelector((state) => state.productFilter.appliedFilters);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products from all products which have same category as appliedFilters
    const filteredProductList = productsData.filter((product) => {
      if (appliedFilters.includes(product.category)) { return true; }
      return false;
    });
    // setting filtered products to state
    setFilteredProducts(filteredProductList);
  }, [appliedFilters, productsData]);

  function populateProducts(product) {
    return (
      <ProductCard
        id={product.id}
        key={product.id}
        name={product.name}
        imageURL={product.imageURL}
        description={product.description}
        category={product.category}
        price={product.price}
      />
    );
  }
  return (
    <div className={styles.ProductListContainer}>
      {filteredProducts.length >= 1 ? filteredProducts.map(populateProducts) : productsData.map(populateProducts)}

    </div>
  );
}
