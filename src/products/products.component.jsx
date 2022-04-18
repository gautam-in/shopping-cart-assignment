import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Dropdown } from "react-bootstrap";
import "./product.styles.scss";
import ProductCard from "../component/product-card/product-card.component";
import { getProducts, getCategory } from "../api/index";

const Products = ({ getProducts, allProducts, getCategory, categories }) => {
  const params = useParams();
  const productType = params && params.type;
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const isTablet = useMediaQuery({ maxWidth: 720 });
  const isMobile = useMediaQuery({ maxWidth: 520 });

  useEffect(() => {
    if (!allProducts?.length) getProducts().then(() => {});
    if (!categories?.length) getCategory().then(() => {});
  }, [categories, allProducts]);

  useEffect(() => {
    if (productType)
      setProducts(
        allProducts.filter((item) => item.imageURL.includes(params.type))
      );
    else if (selectedCategory) {
      setProducts(
        allProducts.filter((item) => item.imageURL.includes(selectedCategory))
      );
    } else setProducts(allProducts);
  }, [params, selectedCategory, productType, allProducts]);

  return (
    <div className="d-flex product-container-element">
      {isMobile && (
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="dropdown-product">
              {selectedCategory || "Select Product Type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((category) => (
                <Dropdown.Item
                  key={`catKey=${category.id}`}
                  onClick={() =>
                    setSelectedCategory(
                      category.key === "fruit-and-veg"
                        ? "fruit-n-veg"
                        : category.key
                    )
                  }
                  className="product-dropdown-menu"
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
      {!productType && !isMobile ? (
        <div className="product-categores-list">
          {categories.map((category) => (
            <div
              key={`catKey=${category.id}`}
              onClick={() =>
                setSelectedCategory(
                  category.key === "fruit-and-veg"
                    ? "fruit-n-veg"
                    : category.key
                )
              }
              className="product-category-btn"
            >
              {category.name}
            </div>
          ))}
        </div>
      ) : (
        !productType && isMobile && <div></div>
      )}
      <div className="product-container w-100">
        {products?.length ? (
          products.map((product) => (
            <ProductCard
              isMobile={isMobile}
              isTablet={isTablet}
              product={product}
              key={`key=${product.id}`}
            />
          ))
        ) : (
          <p className="d-flex align-items-center justify-content-center">
            No item available
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allProducts: state?.products,
  categories: state?.categories,
});
const mapDispatchToProps = { getProducts, getCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
