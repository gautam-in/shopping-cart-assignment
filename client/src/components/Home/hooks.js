import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants';

const useHomeData = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchBanner = async () => {
    try {
      const response = await fetch(`${BASE_URL}/banners`);
      const data = await response.json();
      setBanners(data);
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
    banners,
    categories
  };
};

export default useHomeData;
