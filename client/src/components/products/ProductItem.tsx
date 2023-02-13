import useAppStore from '../../utils/store/store';
import { Product } from '../../utils/types/product';

function ProductItem({ product }: { product: Product }) {
  const { addToCart } = useAppStore();
  return (
    <div className="product-item">
      <h2 className="product-name">{product.name}</h2>
      <div className="product-content-wrapper">
        <div className="product-image">
          <img src={product.imageURL} alt="Product" />
        </div>
        <div className="product-content">
          <div className="product-description">{product.description}</div>
        </div>
      </div>
      <div className="product-actions">
        <div className="product-price">MRP Rs.{product.price}</div>
        <button type="button" className="desktop-button" onClick={() => addToCart(product)}>
          Buy Now
        </button>
        <button type="button" className="responsive-button" onClick={() => addToCart(product)}>
          Buy Now @ Rs.{product.price}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
