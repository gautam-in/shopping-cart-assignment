import ProductContainer from "../molecules/ProductContainer";

function Products({ products }) {
  if (!products.length) return null;
  return products.map((product) => (
    <ProductContainer key={product.id} product={product} />
  ));
}

export default Products;
