/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';
import CategoryBanner from './CategoryBanner';
import styles from '../../styles/CategoryBannerList.module.css';

export default function CategoryBannerList() {
  const [categoryList, setCategoryList] = useState([]);
  let counter = 0;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/categories');
      const categoryData = await res.json();
      setCategoryList(categoryData);
    }
    fetchData();
  }, []);

  function populateCategoryBanners(category) {
    if (category.imageUrl) {
      counter++;
      let reverse = false;
      if (counter % 2 === 0) reverse = true;
      return (
        <CategoryBanner
          reverse={reverse}
          id={category.id}
          key={category.id}
          name={category.name}
          description={category.description}
          imgURL={category.imageUrl}
        />
      );
    }
    return null;
  }

  return (
    <div className={styles.CategoryBannerListContainer}>
      {categoryList && categoryList.map(populateCategoryBanners)}
    </div>

  );
}
