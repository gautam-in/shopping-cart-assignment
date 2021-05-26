import { memo } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "store/product/productSlice";
import CustomButton from "components/Shared/CustomButton";
import { Container } from "./Item.styles";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const image = require(`static/${data.imageURL}`).default;
  const addToCart = () => {
    dispatch(addProduct(data));
  };
  return (
    <Container>
      <h3 className="product-name">{data.name}</h3>
      <img height="180" src={image} alt={data.name} loading="lazy" />
      <div className="description">{data.description}</div>
      <div className="product-footer">
        <div className="price">MRP Rs.{data.price}</div>
        <CustomButton onClick={addToCart} title="Buy Now" />
      </div>
    </Container>
  );
};

export default memo(Item);
