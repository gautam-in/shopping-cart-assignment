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
                        onClick={() => toggleActiveCategoryCallback(category.id)}
                        key={category.key}>
                        {category.name}
                        </li>
                    );
                })}
            </ul>
            <select className="category-nav-dropdown" value={activeCategory} onChange={(event) => toggleActiveCategoryCallback(event.target.value)}>
            <option key='' value='all'>Please select category</option>
            {categories.map((category) => (
              <option key={category.key} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
    );
}

export default CategoryNav;