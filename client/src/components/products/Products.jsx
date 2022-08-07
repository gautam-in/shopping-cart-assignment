import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import "./products.css";
import { ShopContext } from "../../contexts/shoppingContext";
import { getAxiosData, postAxiosData } from "../../utils/axiosData";
import { Helmet } from "react-helmet";

const Products = () => {
  const { addItemToCart, shopCategories } = useContext(ShopContext);
  const [productLists, setProductLists] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isProductSearch, setIsProductSearch] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const loadProductsInfo = async () => {
    const productInfo = await getAxiosData("http://localhost:5000/products");
    if (productInfo) {
      setProductLists(productInfo);
    }
  };
  useEffect(() => {
    loadProductsInfo();
    if (shopCategories) {
      const categories = shopCategories.filter((item) => item.enabled === true);
      setCategoryList(categories);
    }
  }, []);
  const searchProducts = async (e) => {
    e.preventDefault();
    if (selectedCategoryId === e.target.id) {
      setIsProductSearch(false);
      setSelectedCategoryId("");
    } else {
      setIsProductSearch(true);
      setSelectedCategoryId(e.target.id);
      let searchedProduct = productLists.filter(
        (p) => p.category === e.target.id
      );

      setSearchedProducts([...searchedProduct]);
    }
  };
  const handleItemToCart = async (e, productToAdd) => {
    e.preventDefault();
    const { response } = await postAxiosData(
      "http://localhost:5000/addToCart",
      productToAdd.id
    );
    if (response === "Success") {
      addItemToCart(productToAdd);
    }
  };
  return (
    <div className="products-container">
      <Helmet>
        <meta
          name="description"
          content="Buy home products, vegetables, babycare, hygiene products, beverages, cakes and diary products."
        />
      </Helmet>
      <div className="product-types">
        <div className="sticky-sidebar">
          {categoryList.map((item) => {
            return (
              <div
                className={
                  selectedCategoryId === item.id
                    ? "product-sidebar-active"
                    : "product-sidebar"
                }
                onClick={(e) => searchProducts(e)}
                key={item.id}
                id={item.id}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="products-lists">
        {isProductSearch ? (
          <>
            {searchedProducts.map((product) => {
              return (
                <div className="product-container" key={product.id}>
                  <h6>
                    <strong>{product.name}</strong>
                  </h6>
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    style={{ margin: "10px" }}
                    className="product-image"
                  />
                  <p>{product.description.substring(0, 50)}</p>
                  <div className="product-price">
                    <div>MRP Rs.{product.price}</div>
                    <Button
                      className="buyItem"
                      onClick={(e) => handleItemToCart(e, product)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {productLists.map((product) => {
              return (
                <div className="product-container" key={product.id}>
                  <h6>
                    <strong>{product.name}</strong>
                  </h6>
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    style={{ margin: "10px" }}
                    className="product-image"
                  />
                  <p>{product.description.substring(0, 50)}</p>
                  <div className="product-price">
                    <div>MRP Rs.{product.price}</div>
                    <Button
                      className="buyItem"
                      onClick={(e) => handleItemToCart(e, product)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
export default Products;
