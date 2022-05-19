import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import './category-nav.scss';

const CategoryNav = ({toggleActiveCategoryCallback, activeCategory}) => {
    const {categories} = useContext(CategoriesContext);
    return (
        <div className="category-nav__container">
            <ul className="category-nav">
                {categories.map((category) => {
                    return (
                        <li
                        className={`category-nav__item ${activeCategory === category.id ? 'category-nav__item--active' : ''}`}
                        onClick={(event) => toggleActiveCategoryCallback(event, category.id)}
                        key={category.key}>
                        {category.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CategoryNav;