import React, { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./product.scss";
import { getCategory } from "../../redux/category/actionCreator";
const ProductList = React.lazy(() => import("./ProductList"));

function Product() {
  let hashID;
  const dispatch = useDispatch();
  const history = useHistory();
  const [screenSize, setscreenSize] = useState(window.screen.width);
  const categoryData = useSelector((state) => state.getCatDetail.category);

  if (window.location.hash.split("#")[1]) {
    hashID = window.location.hash.split("#")[1];
  }
  const windowSize = () => {
    setscreenSize(window.screen.width);
  };

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", windowSize);
  });

  const loadCategory = (e) => {
    if (screenSize < 480) {
      history.push("/product#" + e.target.value);
    } else {
      history.push("/product#" + e);
    }
  };

  return (
    <div className="app-product">
      {screenSize > 480 ? (
        <div className="category-bar">
          {categoryData.map(
            (data) =>
              data.enabled && (
                <span
                  role="button"
                  className={`items ${
                    hashID === data.id ? "active" : "not-active"
                  }`}
                  key={data.id}
                  onClick={loadCategory.bind(null, data.id)}
                >
                  {data.name}
                </span>
              )
          )}
        </div>
      ) : (
        <div className="category-bar-mobile">
          <select onChange={loadCategory} name="category" id="category">
            {categoryData.map(
              (data) =>
                data.enabled && (
                  <option value={data.id} key={data.id}>
                    {data.name}
                  </option>
                )
            )}
          </select>
        </div>
      )}

      <div className="product-bar">
        <Suspense
          fallback={
            <div className="loader-block">
              <div className="loader"></div>
            </div>
          }
        >
          <ProductList categoryId={hashID} />
        </Suspense>
      </div>
    </div>
  );
}

export default React.memo(Product);
