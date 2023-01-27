import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesData } from "../Features/categories/categoriesSlice";
import ProductItem from "../Features/products/ProductItem";
import { fetchProductsData } from "../Features/products/productsSlice";
import Sidenav from "../layout/Sidenav";

function Products() {
  const categories = useSelector((state) => state.categories.categories.data);
  const products = useSelector((state) => state.products.products.data);

  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
    dispatch(fetchCategoriesData());
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredData = products.filter((prod) => {
    if (category) {
      return prod.category == category;
    }

    return products;
  });

  return (
    <section className="products-listing">
      <div className="row justify-content-between">
        <div className="d-none d-md-block col-md-3">
          <Sidenav categories={categories} setCategory={setCategory} />
        </div>
        <div className="col-12 col-md-9">
          <form action="" className="d-md-none">
            <div className="mb-3">
              <select
                onChange={handleChange}
                name="categories"
                id="categories"
                aria-label="select product category"
              >
                {categories.map((cat) => {
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>

          <div className="row justify-content-between">
            {filteredData.length > 0 ? (
              filteredData.map((product) => {
                return <ProductItem key={product.id} product={product} />;
              })
            ) : (
              <p className="text-center">No products found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
