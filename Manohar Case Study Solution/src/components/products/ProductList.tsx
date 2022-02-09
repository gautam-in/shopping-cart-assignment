import { Product } from "./IProduct";

interface ProdList {
  item: Product;
  key: string;
  onClick: (val: string) => void;
}

const ProductList: React.FC<ProdList> = (props) => {
  const image = props.item.imageURL.substring(1);
  return (
    <div className="product-card shadow p-3 mb-4 bg-white rounded">
      <div className="product-title">
        <h5>{props.item.name}</h5>
      </div>
      <div className="product-image">
        {/* <img src={require(`.${props.item.imageURL}`)} alt="test" /> */}
        <img src={image} alt="test" />
      </div>
      <div className="product-info p-1 mb-3">
        <p>
          {props.item.description.substring(
            0,
            props.item.description.length < 150
              ? props.item.description.length
              : 150
          )}
        </p>
      </div>
      <div className="product-price pt-1">
        <h6>MRP Rs.{props.item.price}</h6>
        <button onClick={() => props.onClick(props.item.id)}>Buy now</button>
      </div>
    </div>
  );
};

export default ProductList;
