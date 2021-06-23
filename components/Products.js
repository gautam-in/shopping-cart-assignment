import ProductTile from "./ProductTile";

function Products({ products }) {

  const renderProducts = (products) => {
    if (products)
      return products.map((product) => {
        return <ProductTile key={product.id} product={product} />;
      });
  };

  return <>{renderProducts(products)}</>;
}


export default Products;
