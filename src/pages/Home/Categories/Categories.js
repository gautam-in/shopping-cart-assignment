import React, { useEffect, useState } from 'react';
import './Categories.scss';
import Api from '../../../services/Api';

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    Api.categories()
      .then((data) => {
        setLoading(false);
        setCategories(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);
  const categoriesList = categories.map((category) => {
    const { id, name, imageUrl, description, key } = category;
    return (
      <li key={id} className='card-wrap'>
        <div className='image-wrap'>
          <img src={require(`../../../../static/images/category/${imageUrl}`).default} alt={name} />
        </div>
        <div className='text-wrap'>
          <h2>{name}</h2>
          <p>{description}</p>
          <button className='explore-btn' type='button'>
            Explore {key}
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className='categories-wrap'>
      <div className='container'>
        <ul className='clearfix'>
          {loading && <h5>Loading....</h5>}
          {!loading && !error && categoriesList}
        </ul>
        {!loading && error && <h1>Something went wrong!</h1>}
      </div>
    </div>
  );
};

export default Categories;
