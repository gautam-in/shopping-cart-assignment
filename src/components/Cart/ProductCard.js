import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "store/product/productSlice";
import { CartProduct } from "./ProductCard.styles";
import getImage from "helpers/getImage";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const image = getImage(data.imageURL);

  const add = () => dispatch(addProduct(data));

  const remove = () => dispatch(removeProduct(data.id));

  return (
    <CartProduct key={data.id}>
      <img src={image} alt={data.name} loading="lazy" />

      <div className="details">
        <div className="item-name">{data.name}</div>
        <div className="item-quantity">
          <button className="btn" onClick={remove}>
            -
          </button>
          <span className="total-item">{data.totalItem}</span>
          <button className="btn" onClick={add}>
            +
          </button>
          <span className="times">&#10006;</span>
          <span className="price">Rs.{data.price}</span>
        </div>
      </div>

      <div className="total-price">Rs.{data.totalItem * data.price}</div>
    </CartProduct>
  );
};

export default ProductCard;
