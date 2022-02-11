import React, { useEffect, useState, useContext } from "react";
import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";
import ProductCard from "../../components/ProductCard";
import CartContext from "../../store/cart-context";
import DropDown from "../../components/DropDown";
import { getCategories, getProducts, addToCart } from "../../util/commonUtil";
let products;
const sortArr = [];

function ProductListing() {
  const [categoryData, setCategoryData] = useState();
  const [allProducts, setAllProducts] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const ctx = useContext(CartContext);

  useEffect(() => {
    const getDetails = async () => {
      const categories = await getCategories();
      setCategoryData(categories);
      const prodData = await getProducts();
      setAllProducts(prodData);
      categories.forEach((obj) => {
        sortArr[obj.order - 1] = obj;
      });
      if (id) {
        const newProductsList = findProducts(prodData, id);
        products = showProducts(newProductsList);
      } else {
        products = showProducts(prodData);
      }
      setLoading(false);
    };
    getDetails();
  }, []);

  const findProducts = (allProducts, id) => {
    return allProducts.filter((eachProduct) => {
      if (eachProduct.category === id) return eachProduct;
    });
  };

  const showProducts = (newList) => {
    return newList.map((eachProd) => (
      <ProductCard
        key={eachProd.id}
        product={eachProd}
        onClick={productClickHandler}
      />
    ));
  };

  const categoryClickHandler = (ctId) => {
    if (ctId === id) {
      products = showProducts(allProducts);
      navigate(`/PLP`);
    } else if (ctId !== id) {
      const newProductsList = findProducts(allProducts, ctId);
      products = showProducts(newProductsList);
      navigate(`/PLP/${ctId}`);
    }
  };

  const productClickHandler = async (productId, product) => {
    const data = await addToCart(productId, product);
    if (data.response == "Success") {
      ctx.addItem({ ...product, amount: 1 });
    }
  };

  return (
    <main className="pblock">
      {!loading && (
        <>
          <SideBar list={sortArr} clickHandler={categoryClickHandler} />{" "}
          <DropDown
            list={sortArr}
            categoryClickHandler={categoryClickHandler}
            className="pblock__dropDown"
          ></DropDown>
          <main className="pblock__products">{products}</main>
        </>
      )}
    </main>
  );
}

export default ProductListing;
