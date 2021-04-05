/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import {useEffect} from 'react';
import './Categories.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesDataRequest} from '../../../actions';
import {allCategoriesData} from '../../../selector';

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesDataRequest());
  }, [dispatch]);

  const {loading, data, error} = useSelector((state) =>
    allCategoriesData(state),
  );

  const categoriesList = data.map((category) => {
    const {id, name, imageUrl, description, key} = category;
    return (
      <li key={id} className="card-wrap">
        <div className="image-wrap">
          <img
            src={
              require(`../../../../static/images/category/${imageUrl}`).default
            }
            alt={name}
          />
        </div>
        <div className="text-wrap">
          <h2>{name}</h2>
          <p>{description}</p>
          <button className="explore-btn" type="button">
            Explore {key}
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className="categories-wrap">
      <>
        <ul className="clearfix">
          {loading && <h5>Loading....</h5>}
          {!loading && !error && categoriesList}
        </ul>
        {!loading && error && <h1>Something went wrong!</h1>}
      </>
    </div>
  );
};

export default Categories;
