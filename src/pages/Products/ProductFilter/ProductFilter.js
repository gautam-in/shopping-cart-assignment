import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { allCategoriesData } from '../../../selector';
import './ProductFilter.scss';

const ProductFilter = React.memo(({ filterId }) => {
  const [activeId, setActiveId] = useState(null);

  const { loading, data, error } = useSelector((state) => allCategoriesData(state));

  useEffect(() => {
    setActiveId(filterId);
  }, [filterId]);

  const handleClick = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  const categoriesList = data.map((category) => {
    const { id, name } = category;
    return (
      <li key={id}>
        <Link
          to={{
            pathname: '/products',
            state: { id: activeId === id ? null : id }
          }}
          className={activeId === id ? 'is-active' : ''}
          onClick={() => handleClick(id)}
        >
          {name}
        </Link>
      </li>
    );
  });

  return (
    <div className='categories-filter-data-wrap'>
      <ul className='clearfix'>
        {loading && <h5>Loading....</h5>}
        {!loading && !error && categoriesList}
      </ul>
      {!loading && error && <h1>Something went wrong!</h1>}
    </div>
  );
});

ProductFilter.propTypes = {
  filterId: PropTypes.string
};

ProductFilter.defaultProps = {
  filterId: null
};

export default ProductFilter;
