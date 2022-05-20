const CardItem = ({ item }) => {
  const { name, imageURL, description, price } = item;
  return (
    <div className="product-card">
      <div className="productName">
        <h1>{name}</h1>
      </div>
      <div className="productDetails">
        <img
          alt={name}
          src="https://m.media-amazon.com/images/I/61QKKsgtVqL._SX522.jpg"
          width="250"
          height="250"
        />
        <p>{description}</p>
      </div>
      <div className="productPrice">
        <h5>MRP Rs.{price}</h5>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
export default CardItem;
