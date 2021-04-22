import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { allCategoriesData } from '../../../selector';
import './ProductFilter.scss';

const ProductFilter = React.memo(({ filterId }) => {
  const history = useHistory();
  const [activeId, setActiveId] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { loading, data, error } = useSelector((state) => allCategoriesData(state));

  useEffect(() => {
    setActiveId(filterId);
  }, [filterId]);

  useEffect(() => {
    let activeCategory = !loading && !error && data.filter((category) => category.id === filterId);
    activeCategory && activeCategory.length
      ? setActiveCategory(activeCategory[0].name)
      : setActiveCategory(null);
  }, [filterId, loading, data, error]);

  const handleClick = (value) => {
    const state = { id: activeId === value ? null : value };
    history.push({
      pathname: '/products',
      state
    });
    setActiveId(state.id);
  };

  const toggle = () => setIsOpen(!isOpen);

  const categoriesList = data.map((category) => {
    const { id, name } = category;
    return (
      <li
        aria-hidden='true'
        key={id}
        className={activeId === id ? 'is-active' : ''}
        onClick={() => handleClick(id)}
      >
        <span>{name}</span>
      </li>
    );
  });

  return (
    <>
      <div className='categories-filter-wrap'>
        <div className='categories-filter-data-wrap'>
          <ul className='clearfix'>
            {loading && <h5>Loading....</h5>}
            {!loading && !error && categoriesList}
          </ul>
          {!loading && error && <h1>Something went wrong!</h1>}
        </div>
      </div>

      {!loading && !error && (
        <div className='mobile-collapse-categories-filter'>
          <div
            className={`collapse-header ${activeCategory ? 'active-header' : ''}`}
            onClick={toggle}
          >
            {activeCategory ? activeCategory : data[0].name}
            {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
          </div>
          <Collapse isOpen={isOpen}>
            <div className='categories-filter-data-wrap'>
              <ul className='clearfix'>
                {loading && <h5>Loading....</h5>}
                {!loading && !error && categoriesList}
              </ul>
            </div>
          </Collapse>
        </div>
      )}
    </>
  );
});

ProductFilter.propTypes = {
  filterId: PropTypes.string
};

ProductFilter.defaultProps = {
  filterId: null
};

export default ProductFilter;
