import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {SkeletonProductFilter} from '../../../components/SkeltonLoaders';
import AlertInfo from '../../../components/Alert';
import {allCategoriesData} from '../../../selector';
import './ProductFilter.scss';
import {fetchCategoriesDataRequest} from '../../../actions';

const ProductFilter = React.memo(({filterId, setFilterId}) => {
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    dispatch(fetchCategoriesDataRequest());
  }, [dispatch]);

  const {loading, data, error} = useSelector((state) =>
    allCategoriesData(state),
  );

  useEffect(() => {
    setActiveId(filterId);
  }, [filterId]);

  const handleClick = (value) => {
    const id = activeId === value ? null : value;
    setFilterId(id);
    setActiveId(id);
  };

  const categoriesList = data.map((category) => {
    const {id, name} = category;
    return (
      <li
        aria-hidden="true"
        key={id}
        className={activeId === id ? 'is-active' : ''}
        onClick={() => handleClick(id)}
      >
        <span>{name}</span>
      </li>
    );
  });

  const categoriesOptionList = data.map((category) => {
    const {id, name} = category;
    return (
      <option key={id} data-testid="select-option" value={id}>
        {name}
      </option>
    );
  });

  return (
    <div
      className="categories-filter-data-wrap"
      data-testid="product-categories"
    >
      <ul className="clearfix" data-testid="product-filter-list">
        {loading && <SkeletonProductFilter />}
        {!loading && !error && categoriesList}
      </ul>
      <div
        className="product-categories-dropdown"
        data-testid="product-filter-select"
      >
        {!loading && !error && (
          <select
            value={activeId || ''}
            onChange={(e) => handleClick(e.target.value)}
            data-testid="select"
          >
            <option value="" data-testid="select-option">
              select Categories
            </option>
            {categoriesOptionList}
          </select>
        )}
      </div>
      {!loading && error && <AlertInfo />}
    </div>
  );
});

ProductFilter.propTypes = {
  filterId: PropTypes.string,
  setFilterId: PropTypes.func.isRequired,
};

ProductFilter.defaultProps = {
  filterId: null,
};

export default ProductFilter;
