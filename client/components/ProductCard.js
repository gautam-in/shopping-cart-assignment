import Image from 'next/image';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classes from '../styles/product-card.module.scss';
import { addToCart } from '../store/cart';

const ProductCard = ({ product }) => {
  const { name, description, imageURL, price } = product;

  const dispatch = useDispatch();

  return (
    <section className={classes.container}>
      <h3 className={classes.title}>{name}</h3>
      <span className={classes.content}>
        <Image src={imageURL} alt={description} height={150} width={150} />
        <span className={classes.details}>
          <p className={classes.desc}>{description}</p>
          <button
            className={classes.buyNow}
            onClick={() => dispatch(addToCart(product))}
          >
            Buy Now @ MRP Rs.{price}
          </button>
        </span>
      </span>
    </section>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
