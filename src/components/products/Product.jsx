import React, { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Product.css";
import { getCategory } from "../../redux/category/actionCreator";
const ProductList = React.lazy(() => import("../productDetails/ProductDetails"));

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [screenSize, setscreenSize] = useState(window.screen.width);
  const categoryData = useSelector((state) => state.getCategoryDetails.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setscreenSize(window.screen.width);
    });
  }, [screenSize]);

  const loadCategory = (event) => {
    event === "showAll"
      ? history.push("/product")
      : screenSize < 480
      ? history.push("/product/" + event.target.value)
      : history.push("/product/" + event);
  };

  return (
    <div className="app-product">
      {screenSize > 480 ? (
        <aside className="category-tab-section">
          <button
            onClick={loadCategory.bind(null, "showAll")}
            className={`items ${!Boolean(id) && "active"}`}
          >
            Show All
          </button>
          {categoryData.map(
            (data) =>
              data.enabled && (
                <button
                  className={`items ${
                    id === data.id ? "active" : "not-active"
                  }`}
                  key={data.id}
                  onClick={loadCategory.bind(null, data.id)}
                >
                  {data.name}
                </button>
              )
          )}
        </aside>
      ) : (
        <div className="category-tab-section-mobile">
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

      <div className="product-tab-section">
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          }
        >
          <ProductList categoryId={id} />
        </Suspense>
      </div>
    </div>
  );
}

export default React.memo(Product);