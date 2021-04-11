/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import {useEffect} from 'react';
import './Categories.scss';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCategoriesDataRequest} from '../../../actions';
import {allCategoriesData} from '../../../selector';
import AlertInfo from '../../../components/Alert';
import {SkeletonImage} from '../../../components/SkeltonLoaders';

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

  const SkeletonImageList = [...Array(4)].map((i) => (
    <li key={i} className="skeleton-card-wrap">
      <SkeletonImage />
    </li>
  ));
  return (
    <div className="categories-wrap">
      <>
        <ul className="clearfix">
          {loading && SkeletonImageList}
          {!loading && !error && categoriesList}
        </ul>
        {!loading && error && <AlertInfo />}
      </>
    </div>
  );
};

export default Categories;
