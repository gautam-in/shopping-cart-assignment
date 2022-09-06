import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants';

const useProductsData = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchBanner = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/categories`);
      const data = await response.json();
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBanner();
    fetchCategories();
  }, []);

  return {
    products,
    categories
  };
};

export default useProductsData;
