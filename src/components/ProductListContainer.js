import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isMobile, isTablet, isDesktop } from '../utilities';
import ProductListNav from './ProductListNav';
import ProductListNavMobile from './ProductListNavMobile';
import ProductListMain from './ProductListMain';
import { useParams } from 'react-router-dom';

function ProductListContainer(props) {
  let { category } = useParams();
  const [mobile, setIsMobile] = useState(false);
  const [tablet, setIsTablet] = useState(false);
  const [desktop, setIsDesktop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    function handleResize() {
      const mobile = isMobile();
      const tablet = isTablet();
      const desktop = isDesktop();
      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsDesktop(desktop);
    }
    window.addEventListener('resize', handleResize);

    const { REACT_APP_CATEGORIES_URL = 'http://localhost:5000/categories' } = process.env;
    axios.get(REACT_APP_CATEGORIES_URL).then(response => {
      let { data } = response;
      data = data.sort(function(a, b) {
        return a.order - b.order;
      });
      data = data.filter(element => element.enabled);
      if (props.category) {
        const categoryObj = data.find((element) => element.name.toLowerCase().replaceAll(" ", '-') === props.category);
        if (categoryObj) setCategoryId(categoryObj.id);
      }
      setCategories(data);
    }).catch(error => console.error(error));

    return () => window.removeEventListener('resize', window);
  }, [category]);
  return (
    <div className="product-list-container">
      <ProductListNavMobile categories={categories} />
      <ProductListNav categories={categories} />
      <ProductListMain mobile={mobile} tablet={tablet} desktop={desktop} categoryId={categoryId} />
    </div>
  );
}

export default ProductListContainer;
