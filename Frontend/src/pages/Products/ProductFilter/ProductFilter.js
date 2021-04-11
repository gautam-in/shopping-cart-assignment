import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {SkeletonProductFilter} from '../../../components/SkeltonLoaders';
import AlertInfo from '../../../components/Alert';
import {allCategoriesData} from '../../../selector';
import './ProductFilter.scss';

const ProductFilter = React.memo(({filterId}) => {
  const history = useHistory();
  const [activeId, setActiveId] = useState(null);

  const {loading, data, error} = useSelector((state) =>
    allCategoriesData(state),
  );

  useEffect(() => {
    setActiveId(filterId);
  }, [filterId]);

  const handleClick = (value) => {
    const state = {id: activeId === value ? null : value};
    history.push({
      pathname: '/products',
      state,
    });
    setActiveId(state.id);
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

  return (
    <div className="categories-filter-data-wrap">
      <ul className="clearfix">
        {loading && <SkeletonProductFilter />}
        {!loading && !error && categoriesList}
      </ul>
      {!loading && error && <AlertInfo />}
    </div>
  );
});

ProductFilter.propTypes = {
  filterId: PropTypes.string,
};

ProductFilter.defaultProps = {
  filterId: null,
};

export default ProductFilter;
