import { useCartStore } from "../../../cart.store";
import { Box } from "../../atoms";
import { ProductCard, type Product } from "../../molecules/product-card";

import "./products-grid.scss";

type ProductsGridProps = {
  products: Product[];
};

export function ProductsGrid(props: ProductsGridProps) {
  const { products } = props;

  const addToCart = useCartStore((state) => state.addToCart);

  const cartItems = useCartStore((state) => state.cart);

  return (
    <Box m="xl" className="products-grid">
      {products.map((product) => (
        <ProductCard
          isProductInCart={cartItems.some((item) => item.id === product.id)}
          addToCart={addToCart}
          key={product.sku}
          product={product}
        />
      ))}
    </Box>
  );
}
