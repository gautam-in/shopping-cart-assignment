import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../../../redux/actions/actionCreators';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


import './CategoryFilter.scss';

const CategoryFilter = React.memo(({ filterId }) => {
    const history = useHistory();
    const [activeId, setActiveId] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const categoriesList = useSelector(state => state.categoriesLis.categories);


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

        const state = { id: value };
        history.push({
            pathname: '/products',
            state
        });
        setActiveId(state.id);
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
                {activeCategory ? activeCategory : 'All Products'}
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
