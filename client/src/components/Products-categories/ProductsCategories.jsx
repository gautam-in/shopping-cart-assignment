import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsCategories.module.scss';
import ShopContext from '../../contexts/ShopContext';

const ProductsCategories = ({ categories }) => {
  const Shop = useContext(ShopContext);
  const sortedCategories = categories.sort((a, b) => a.order - b.order);

  const handleCategory = (e) => {
    Shop.setCategory(e.target.value);
  };

  const handleCategoryList = (val) => {
    Shop.setCategory(val);
  };

  return (
    <aside className={styles['categories-container']} tabIndex="0">
      <div className={styles['dropdown-container']}>
        <select className={styles['dropdown']} onChange={handleCategory}>
          <option key="empty" value="">
            Select All
          </option>
          {sortedCategories.map(
            (category) =>
              category.enabled && (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              )
          )}
        </select>
      </div>
      <div>
        <ul className={styles['sidebar-container']}>
          <li
            role="menuitem"
            className={`${styles['sidebar-items']} ${
              Shop.selectedCategory === '' ? styles['activeCategory'] : ''
            }`}
            key="empty"
            onClick={() => handleCategoryList('')}>
            Select All
          </li>
          {sortedCategories.map(
            (category) =>
              category.enabled && (
                <ListItem
                  id={category.id}
                  key={category.id}
                  handleCategoryList={handleCategoryList}>
                  {category.name}
                </ListItem>
              )
          )}
        </ul>
      </div>
    </aside>
  );
};

const ListItem = ({ id, children, handleCategoryList }) => {
  const Shop = useContext(ShopContext);
  return (
    <li
      role="menuitem"
      className={`${styles['sidebar-items']} ${
        Shop.selectedCategory === id ? styles['activeCategory'] : ''
      }`}
      value={id}
      key={id}
      onClick={() => handleCategoryList(id)}>
      {children}
    </li>
  );
};

export default ProductsCategories;

ListItem.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  handleCategoryList: PropTypes.func
};

ProductsCategories.propTypes = {
  categories: PropTypes.array
};
