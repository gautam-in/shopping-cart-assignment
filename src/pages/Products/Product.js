import BButton from "../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { sendAddRequest } from "../../store/cart-actions";
//import { cartActions } from "../../store/cartSlice";
import "./Product.scss";
const Product = ({ data }) => {
  //console.log("data in prod component ",data)
  // const reduxState = localStorage.removeItem("cartItems");
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.uiReducer.isMobile);
  const isTablet = useSelector((state) => state.uiReducer.isTablets);
  const addToCartHandler = (data) => {
    dispatch(sendAddRequest(data));
    //console.log(reduxState);
  };
  return (
    <div className="product-card-container">
      <div className="product-name l-text">{data.name}</div>
      <div className="image-footer">
        <div
          className={
            isTablet && !isMobile ? "d-flex" : isTablet && isMobile && "d-flex"
          }
        >
          <img
            className="product-card-image"
            src={data.imageURL}
            alt={data.name}
          />
          <div>
            <div className="description text">{data.description}</div>
            {isTablet && isMobile && (
              <BButton onClick={() => addToCartHandler(data)}>
                Buy Now @ Rs.{data.price}
              </BButton>
            )}
          </div>
        </div>
        {isTablet && !isMobile ? (
          <BButton onClick={() => addToCartHandler(data)}>
            Buy Now @ Rs.{data.price}
          </BButton>
        ) : (
          !isTablet && (
            <div className="product-card-footer">
              <div className="price text">MRP Rs.{data.price}</div>
              <BButton onClick={() => addToCartHandler(data)}>Buy Now</BButton>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Product;
