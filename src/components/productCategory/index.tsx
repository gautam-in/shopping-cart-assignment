import React, { useContext } from 'react';
import AppContext from '../../contexts/appContext/app-context';
import './index.scss';

const ProductCategory = ({ category }) => {
    const {
        appState: { selectedCategory },
        setSelectedCategory,
    } = useContext(AppContext);

    const handleFilter = (categoryId) => () => {
        if (categoryId !== selectedCategory) {
            setSelectedCategory(categoryId);
        } else {
            setSelectedCategory(null);
        }
    };

    return (
        <aside className="product-category">
            <ul>
                {category.length
                    ? category.map(
                          (item) =>
                              item.enabled && (
                                  <li
                                      key={item.id}
                                      style={{ color: item.id === selectedCategory ? 'red' : 'black' }}
                                      onClick={handleFilter(item.id)}>
                                      {item.name}
                                  </li>
                              ),
                      )
                    : null}
            </ul>
        </aside>
    );
};

export default ProductCategory;
