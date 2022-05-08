import React, { FC, useCallback } from 'react';
import { Category } from '../../services/AppService';
import './index.scss';

interface CategoryProps {
    category: Category;
    openCategory: (id: string) => void;
}

const Categories: FC<CategoryProps> = ({ category, openCategory }) => {
    const handleCategory = useCallback(
        (id) => () => {
            openCategory(id);
        },
        [openCategory],
    );
    return (
        <div className="banner-component d-flex justify-content-between">
            <div className="image-container">
                <img src={category.imageUrl} alt={category.name} className="banner-image" />
            </div>
            <div className="content">
                <h2 className="heading">{category.name}</h2>
                <p className="desc">{category.description}</p>
                <button className="link-button" onClick={handleCategory(category.id)}>
                    Explore {category.key}
                </button>
            </div>
        </div>
    );
};

export default Categories;
