import { useSelector, useDispatch } from "react-redux";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

import { setSelectedCategory } from "../../reducers/productsReducer";
import ProductCard from "../ProductCard";

const ProductCategory = ({ categories, products }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.productsReducer.selectedCategory
  );

  const handleCategoryPress = (id) => {
    if (selectedCategory === id) {
      dispatch(setSelectedCategory(""));
    } else {
      dispatch(setSelectedCategory(id));
    }
  };

  return (
    <aside id="categoryContainer">
      {categories?.map((category, index) => (
        <div key={index.toString()}>
          <div
            className="category"
            onClick={() => handleCategoryPress(category.id)}
            style={{
              fontWeight: selectedCategory === category.id ? "bold" : "normal",
            }}
          >
            {category.name}
            {selectedCategory === category.id ? (
              <AiOutlineUp color="#fff" className="arrow" />
            ) : (
              <AiOutlineDown color="#fff" className="arrow" />
            )}
          </div>
          <div
            className={
              selectedCategory === category.id
                ? "filteredProductBlock"
                : "hideProductBlock"
            }
          >
            <ProductCard products={products}/>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ProductCategory;
