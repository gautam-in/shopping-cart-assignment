import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/product/actionCreator";
import { addItemsToCart } from "../../redux/cart/actionCreator";
function ProductDetails(props) {
  const categoryId = props.categoryId;
  const productData = useSelector((state) => state.getProductDetails.product);
  const updatedProduct = productData.filter(
    (data) => categoryId === data.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const prodPurchase = (productData) => {
    let prodObj = {
      name: productData.name,
      price: productData.price,
      id: productData.id,
      image: productData.imageURL,
      count: 1,
    };
    dispatch(addItemsToCart(prodObj));
  };

  return (
    <>
      {(categoryId ? updatedProduct : productData).map((data) => (
        <div key={data.id} className="app-productList">
          <h3 className="categoryName">
            <b>{data.name}</b>
          </h3>
          <div className="product-card">
            <img
              src={data.imageURL}
              alt={data.sku}
              loading="lazy"
              width="115"
              height="115"
            ></img>
            <span className="prod-description">{data.description}</span>
            <div className="prod-purchase">
              <span>MRP Rs. {data.price}</span>
              <button className="app-btn" onClick={prodPurchase.bind(null, data)}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default React.memo(ProductDetails);