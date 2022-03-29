const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={process.env.PUBLIC_URL + product.imageURL} />
    </div>
  );
};

export default ProductCard;
