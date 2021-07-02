import ProductContainer from "../molecules/ProductContainer";

function Products({ products }) {

  const renderProducts = (products) => {
    if (products)
      return products.map((product) => {
        return <ProductContainer key={product.id} product={product} />;
      });
  };

  return <>{renderProducts(products)}</>;
}


export default Products;
