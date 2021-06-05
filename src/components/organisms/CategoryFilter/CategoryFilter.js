import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GET_CATEGORIES_API } from '../../../apis';
import { getData } from '../../../getService';
import './CategoryFilter.scss';
import * as Constants from '../../../shared/constants';
const CategoryFilter = React.memo(({ filterId }) => {
  const history = useHistory();
  const [activeId, setActiveId] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    getData(GET_CATEGORIES_API)
      .then((json) => {
        let filtereCategories = json.data
          .filter((item) => item.order != -1)
          .sort((item1, item2) => {
            return item1.order - item2.order;
          });
        setCategoriesList(filtereCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setActiveId(filterId);
  }, [filterId]);

  useEffect(() => {
    let activeCategory = categoriesList.filter((category) => category.id === filterId);
    activeCategory && activeCategory.length
      ? setActiveCategory(activeCategory[0].name)
      : setActiveCategory(null);
  }, [filterId, categoriesList]);

  const handleClicks = (value) => {
    if (activeId != value) {
      history.push({
        pathname: '/products',
        search: `?category=${value}`
      });
      setActiveId(value);
    } else {
      history.push({
        pathname: '/products'
      });
    }
  };
  const toggle = () => setIsOpen(!isOpen);
  const categoriesContent = categoriesList.map((category) => {
    const { id, name } = category;
    return (
      <li
        key={id}
        className={`list-item ${activeId === id ? 'active-item' : ''}`}
        onClick={() => handleClicks(id)}
      >
        {name}
      </li>
    );
  });

  return (
    <aside className='category-filter'>
      <section
        className={`filter-header ${activeCategory ? 'active-header' : ''}`}
        onClick={toggle}
      >
        {activeCategory ? activeCategory : Constants.AllProducts}
      </section>
      <ul className={isOpen ? '' : 'collapse'}>{categoriesContent}</ul>
    </aside>
  );
});

CategoryFilter.propTypes = {
  filterId: PropTypes.string
};

CategoryFilter.defaultProps = {
  filterId: null
};

export default CategoryFilter;
