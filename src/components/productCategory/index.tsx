import React, { FC, useContext } from 'react';
import AppContext from '../../contexts/appContext/app-context';
import { Category } from '../../services/AppService';
import './index.scss';

interface ProductCategoryProps {
    categories: Category[];
}

const ProductCategory: FC<ProductCategoryProps> = ({ categories }) => {
    const {
        appState: { selectedCategory },
        setSelectedCategory,
    } = useContext(AppContext);

    const handleFilter = (categoryId) => () => {
        if (categoryId !== selectedCategory) {
            setSelectedCategory(categoryId);
        }
    };

    return (
        <aside className="product-category">
            <ul>
                <li
                    style={{ color: selectedCategory === null ? '#d00256' : 'black' }}
                    onClick={() => setSelectedCategory(null)}>
                    All
                </li>
                {categories.length
                    ? categories.map(
                          (category) =>
                              category.enabled && (
                                  <li
                                      key={category.id}
                                      style={{ color: category.id === selectedCategory ? '#d00256' : 'black' }}
                                      onClick={handleFilter(category.id)}>
                                      {category.name}
                                  </li>
                              ),
                      )
                    : null}
            </ul>
        </aside>
    );
};

export default ProductCategory;
