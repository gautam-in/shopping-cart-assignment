import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import "./Product.scss";
import { AddToCart } from "../../../redux/actions/actions";
import { useFetch } from "../../../hooks/useFetch";
import { api } from "../../../constants";

export const Product = ({ description, id, imageURL, name, price }) => {
  const dispatch = useDispatch();

  const [{ isLoading }, execute] = useFetch(api.addToCart, {
    manual: true,
    method: "POST",
  });

  const addToCart = async () => {
    await execute();

    dispatch(
      AddToCart({
        id,
        imageURL,
        name,
        price,
        qty: 1,
      })
    );
  };
  return (
    <Card className="product">
      <Card.Title className="title pt-3 px-3">{name}</Card.Title>
      <div className="product-content">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Text className="description p-2">{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="price">MRP Rs. {price}</div>
            <Button
              className="btn-primary"
              onClick={addToCart}
              disabled={isLoading}
            >
              Buy Now
              <span> @ Rs.{price}</span>
            </Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};
