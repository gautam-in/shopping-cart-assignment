import ButtonComponent from "../../components/CustomComponent/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { sendAddRequest } from "../../store/cart-actions";
import "./ProductComponent.scss";
const ProductComponent = ({ data }) => {
 
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.uiReducer.isMobile);
  const isTablet = useSelector((state) => state.uiReducer.isTablets);
  const addToCartHandler = (data) => {
    dispatch(sendAddRequest(data));
  };
  const image = window.location.origin +data.imageURL;

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
            src={image}
            alt={data.name}
          />
          <div>
            <div className="description text">{data.description}</div>
            {isTablet && isMobile && (
              <ButtonComponent onClick={() => addToCartHandler(data)}>
                Buy Now @ Rs.{data.price}
              </ButtonComponent>
            )}
          </div>
        </div>
        {isTablet && !isMobile ? (
          <ButtonComponent onClick={() => addToCartHandler(data)}>
            Buy Now @ Rs.{data.price}
          </ButtonComponent>
        ) : (
          !isTablet && (
            <div className="product-card-footer">
              <div className="price text">MRP Rs.{data.price}</div>
              <ButtonComponent onClick={() => addToCartHandler(data)}>Buy Now</ButtonComponent>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductComponent;