import React, { useState, useEffect } from "react";
import Sidebar from "../common/sideBar";
import Products from "../products/products";
import { connect } from "react-redux";
import { fetchProducts } from  "../../redux/product/productAction"
import { fetchCategories } from "../../redux/category/categoryAction";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: `calc(100vh - 60px)`,
        
        backgroundColor: "#FFFFFF",
        display: "grid",
        gridTemplateColumns: "25% 75%"
    }
}))

function Productlandingpage({
  productsData,
  categoriesData,
  fetchCategories,
  fetchProducts,
}) {
    const classes = useStyles()
  const [currentproducts, setcurrentproducts] = useState([]);
  const [rerender, setrerender] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

 

  const eventhandler = (data) => {
    const filtereddata = data
      ? productsData.products.filter((item) => item.category == data)
      : productsData.products;
    setcurrentproducts(filtereddata);
    setrerender(true);
  };
  return (
    <div className={classes.mainContainer}>
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