import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { allCategoriesData } from '../../../redux/selector';
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
        key={id}
        className={`list-item ${activeId === id ? 'active-item' : ''}`}
        onClick={() => handleClick(id)}
      >
        {name}
      </li>
    );
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <aside className='product-filter-wrap'>
      <section
        className={`filter-header ${activeCategory ? 'active-header' : ''}`}
        onClick={toggle}
      >
        {activeCategory ? activeCategory : 'All Products'}
        {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
      </section>
      <ul className={isOpen ? '' : 'collapse'}>{categoriesList}</ul>
    </aside>
  );
});

ProductFilter.propTypes = {
  filterId: PropTypes.string
};

ProductFilter.defaultProps = {
  filterId: null
};

export default ProductFilter;
