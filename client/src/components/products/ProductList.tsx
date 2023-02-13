import { Product } from '../../utils/types/product';
import ProductItem from './ProductItem';

function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="product-list">
      {products.map((product: Product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
