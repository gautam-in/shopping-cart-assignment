import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesDataRequest} from '../../../actions';
import {allCategoriesData} from '../../../selector';
import './ProductFilter.scss';

const ProductFilter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesDataRequest());
  }, [dispatch]);

  const {loading, data, error} = useSelector((state) =>
    allCategoriesData(state),
  );

  const categoriesList = data.map((category) => {
    const {id, name} = category;
    return (
      <li key={id}>
        <span>{name}</span>
      </li>
    );
  });
  return (
    <div className="categories-filter-data-wrap">
      <ul className="clearfix">
        {loading && <h5>Loading....</h5>}
        {!loading && !error && categoriesList}
      </ul>
      {!loading && error && <h1>Something went wrong!</h1>}
    </div>
  );
};

export default ProductFilter;
