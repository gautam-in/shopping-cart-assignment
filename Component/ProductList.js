import ProductContainer from "./ProductContainer";

const ProductList = (products) => {
  console.log(products);
  return (
    <>
      {products &&
        products.products.map((product) => (
          <ProductContainer key={product.id} product={product} />
        ))}
    </>
  );
};

export default ProductList;
