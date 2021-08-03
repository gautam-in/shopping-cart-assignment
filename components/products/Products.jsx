/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { connect } from "react-redux";
import ErrorHandler from "../errorHandler/ErrorHandler";
import Product from "./product/Product";
import { updateData, updateError } from "../../redux/productsReducer";
import classes from "./Products.module.css";

function Products({ categoryId, products, updateData, updateError }) {
  useEffect(() => {
    fetch("http://localhost:5000/products").then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        const error = (data && data.message) || res.statusText;
        updateError(error);
        return Promise.reject(error);
      }
      updateData(data);
      return data;
    });
  }, []);

  if (products.error) return <ErrorHandler error={products.error} />;

  if (categoryId) {
    products.data = products.data.filter(
      (product) => product.category === categoryId
    );
  }

  return (
    <div className={classes.container}>
      {products.data.length > 0 &&
        products.data.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            imageURL={product.imageURL}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (data) => dispatch(updateData(data)),
    updateError: (error) => dispatch(updateError(error)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
