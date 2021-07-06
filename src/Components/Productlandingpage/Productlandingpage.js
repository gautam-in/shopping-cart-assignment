import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import { connect } from "react-redux";
import "./Productlandingpage.scss";
import { fetchProducts } from "../../redux/Products/productsaction";
import { fetchCategories } from "../../redux/Categories/categoriesactions";
function Productlandingpage({
  productsData,
  categoriesData,
  fetchCategories,
  fetchProducts,
}) {
  const [currentproducts, setcurrentproducts] = useState([]);
  const [rerender, setrerender] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const eventhandler = (data) => {
    const filtereddata = data
      ? productsData.products.filter((item) => item.category == data)
      : productsData.products;
    console.log(filtereddata, "filtereddata");
    setcurrentproducts(filtereddata);
    setrerender(true);
  };
  return (
    <div className="productlandingpage">
      {console.log(productsData, "brooooooooo", categoriesData)}
      <Sidebar
        categories={categoriesData.categories}
        className="selectionbar"
        eventhandler={eventhandler}
      />
      {!rerender && <Products products={productsData.products} />}
      {rerender && <Products products={currentproducts} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productsData: state.products,
    categoriesData: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productlandingpage);
