import { products } from "../../server/products/index.get";
import Product from "./Product";
import { ProductsStyles } from "./styles/ProductsStyles";
import { categories } from "../../server/categories/index.get";
import { CategorySelectStyles } from "./styles/CategorySelectStyles";
import { ProductContainerStyles } from "./styles/ProductContainerStyles";
import { useState } from "react";
import { useEffect } from "react";
function Products({ catId }) {
  function filterHandler(categoryId) {
    const filteredProducts = products.filter((item) => {
      return item.category === categoryId;
    });
    setProductState(filteredProducts);
  }
  const [productState, setProductState] = useState(products);
  useEffect(() => {
    if (catId) {
      filterHandler(catId);
    }
  }, [catId]);

  return (
    <ProductContainerStyles>
      {" "}
      <CategorySelectStyles>
        <ul>
          {categories.map((item) => {
            return (
              <li
                className="category"
                onClick={() => {
                  filterHandler(item.id);
                }}
                key={item.id}
              >
                <h4>{item.name}</h4>
              </li>
            );
          })}
        </ul>
      </CategorySelectStyles>
      <ProductsStyles>
        {productState.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ProductsStyles>
    </ProductContainerStyles>
  );
}

export default Products;
