/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import {useEffect} from 'react';
import './Categories.scss';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCategoriesDataRequestAction} from '../../../actions';
import {allCategoriesData} from '../../../selector';


const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesDataRequestAction());
  }, [dispatch]);

  const {loading, data, error} = useSelector((state) =>
    allCategoriesData(state),
  );

  const categoriesList = data.filter((category) =>  category.enabled === true).map((category) => {
    const {id, name, imageUrl, description, key, enabled} = category;
    const imageUrl1 = imageUrl.split('/').slice(-1);
    
    return enabled && (
      <li key={id} className="card-wrap">
        <div className="image-wrap">
          <img
            src={
              require(`../../../../static/images/category/${imageUrl1}`).default
            }
            alt={name}
          />
        </div>
        <div className="text-wrap">
          <h2>{name}</h2>
          <p>{description}</p>
          <Link
            className="explore-btn"
            to={{
              pathname: '/products',
              state: {id},
            }}
          >
            Explore {key}
          </Link>
        </div>
      </li>
    );
  });

  return (
    <div className="categories-wrap">
      <div>
        <ul className="clearfix">
          {loading && <h5>Loading....</h5>}
          {!loading && !error && categoriesList}
        </ul>
        {!loading && error && <h1>Something went wrong!</h1>}
      </div>
    </div>
  );
};

export default Categories;
