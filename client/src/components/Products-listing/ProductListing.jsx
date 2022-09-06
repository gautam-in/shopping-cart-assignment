import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsListing.module.scss';
import ShopContext from '../../contexts/ShopContext';

const ProductsListing = ({ products }) => {
  const Shop = useContext(ShopContext);
  const selectedProducts =
    Shop.selectedCategory !== ''
      ? products.filter((product) => product.category === Shop.selectedCategory)
      : products;

  const handleBuy = (product) => {
    Shop.updateCartItems(product);
  };
  return (
    <div className={styles['products-container']}>
      {selectedProducts.map((product) => (
        <div className={styles['product-box']} key={product.id}>
          <h6 className={styles['product-heading']}>{product.name}</h6>
          <div className={styles['product-details']}>
            <div className={styles['product-img']}>
              <img src={product.imageURL} alt={product.name} />
            </div>
            <div className={styles['product-details-para']}>
              <p>{product.description.substring(0, 80) + '...'}</p>
              <button
                className={styles['product-btn-1']}
                onClick={() => handleBuy(product)}>{`Buy Now @ RS.${product.price}`}</button>
            </div>
          </div>
          <button
            className={styles['product-btn-2']}
            onClick={() => handleBuy(product)}>{`Buy Now @ RS.${product.price}`}</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsListing;

ProductsListing.propTypes = {
  products: PropTypes.array
};
