import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/product/actionCreator";
import { addRemoveToCart } from "../../redux/cart/actionCreator";
function ProductList(props) {
  // const urlID = props.categoryId || window.location.hash.split("#")[1];
  // Now getting cat id from url only for both home and product page
  const urlID = window.location.hash.split("#")[1];
  const productData = useSelector((state) => state.getProdDetail.product);
  const updatedProduct = productData.filter((data) => urlID === data.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const buyNow = (productData) => {
    let prodObj = {
      name: productData.name,
      price: productData.price,
      id: productData.id,
      image: productData.imageURL,
      count: 1,
    };
    dispatch(addRemoveToCart(prodObj));
  };

  return (
    <>
      {(urlID ? updatedProduct : productData).map((data) => (
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
            <span className="des">{data.description}</span>
            <div className="buynow">
              <span>MRP Rs. {data.price}</span>
              <button className="app-btn" onClick={buyNow.bind(null, data)}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default React.memo(ProductList);
