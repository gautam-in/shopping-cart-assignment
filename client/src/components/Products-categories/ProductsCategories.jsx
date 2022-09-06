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
    <div className={styles['categories-container']}>
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
            className={styles['sidebar-items']}
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
    </div>
  );
};

const ListItem = ({ id, children, handleCategoryList }) => {
  return (
    <div
      className={styles['sidebar-items']}
      value={id}
      key={id}
      onClick={() => handleCategoryList(id)}>
      {children}
    </div>
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
