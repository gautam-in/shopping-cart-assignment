import React, { useState, useEffect } from 'react';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import { GET_CATEGORIES_API } from '../../../apis';
import { getData } from '../../../getService';
import './Categories.scss';
const Categories = React.memo(() => {
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    getData(GET_CATEGORIES_API)
      .then((json) => {
        let filtereCategories = json.data
          .filter((item) => item.order != -1)
          .sort((item1, item2) => {
            return item1.order - item2.order;
          });
        setCategoriesList(filtereCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!categoriesList) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div className='category-container'>
        {categoriesList?.map((a) => {
          return (
            <CategoryCard
              key={a.key}
              name={a.key}
              id={a.id}
              categoryName={a.name}
              imgUrl={a.imageUrl}
              desc={a.description}
            />
          );
        })}
      </div>
    </>
  );
});

export default Categories;
