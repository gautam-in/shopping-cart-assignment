const Product = (props) => {
  const { item, onAdd } = props;
  const { id, name, imageURL, sku, description, price } = item;

  return (
    <>
      <div key={id} className="singleItem">
        <h3 className="itemHead">{name}</h3>
        <img src={imageURL} alt={sku} />
        <p className="itemDescription">{description}</p>
        <p className="itemButs">
          <span>Mrp Rs.{price}</span>
          <button onClick={onAdd.bind(this, item)}>
            BUYNOW
          </button>
        </p>
      </div>
    </>
  )
}
export default Product;