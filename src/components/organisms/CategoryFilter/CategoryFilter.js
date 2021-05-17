import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../../../redux/actions/actionCreators';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GET_CATEGORIES_API } from "../../../apis";
import { getData } from '../../../getService';
import './CategoryFilter.scss';

const CategoryFilter = React.memo(({ filterId }) => {

    const history = useHistory();
    const [activeId, setActiveId] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(() => {
        getData(GET_CATEGORIES_API).then(json => setCategoriesList(json.data)).catch((err) => {
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
