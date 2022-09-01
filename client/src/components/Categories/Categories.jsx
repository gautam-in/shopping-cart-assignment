import PropTypes from 'prop-types';
import styles from './Categories.module.scss';
import { Link } from 'react-router-dom';

const Categories = ({ data }) => {
  console.log(data, 'cat');
  const sortedCategories = data.sort((a, b) => a.order - b.order);
  return (
    <div className={styles['categories-container']}>
      {sortedCategories.map((category, index) => {
        if (category.enabled === false) return;
        const imageBox = (
          <div className={styles.imageBox}>
            <img src={category.imageUrl} alt={category.name} />
          </div>
        );

        const dataBox = (
          <div className={styles.dataBox}>
            <h2>{category.name}</h2>
            <p className={styles['categories-description']}>{category.description}</p>
            <Link to="/products">
              <button>Explore {category.key}</button>
            </Link>
          </div>
        );
        return (
          <div key={category.id} className={styles['categories-items']}>
            {index % 2 == 0 ? dataBox : imageBox}
            {index % 2 == 0 ? imageBox : dataBox}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

Categories.propTypes = {
  data: PropTypes.array
};
