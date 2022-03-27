import React, { useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../redux/Products/products.action";
import * as cartActions from "../../redux/Cart/cart.action";

const ProductList = ({ categoryId }) => {
  let dispatch = useDispatch();
  let productItems = useSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    dispatch(productActions.getProducts(categoryId));
  }, [categoryId]);
  let { products } = productItems;

  let addToCart = (product) => {
    dispatch(cartActions.addProductsToCart(product, 1));
  };
  return (
    <React.Fragment>
      <div className="row">
        {products.map((product) => {
          return (
            <>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={product.id}>
                <div className="product-card d-flex flex-column justify-content-center align-items-center mt-5">
                  <div className="d-flex justify-content-center align-items-center product-heading">
                    <h6>{product.name}</h6>
                  </div>
                  <img
                    src={product.imageURL}
                    className="product-img mb-3"
                    width="150px"
                    height="150px"
                    alt=""
                  />
                  <div className="product-description d-flex align-items-center justify-content-center">
                    <p>{product.description}</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-2 gap-2">
                    <p className="d-xs-none d-sm-none d-md-none d-lg-block mt-3">
                      MRP Rs{product.price}
                    </p>
                    <button
                      className="btn btn-primary btn-sm d-xs-none d-sm-none d-md-none d-lg-block"
                      onClick={addToCart.bind(this, product)}
                    >
                      Buy Now
                    </button>
                    <button
                      className="btn btn-primary btn-sm d-lg-none"
                      onClick={addToCart.bind(this, product)}
                    >
                      Buy Now @ {product.price}
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ProductList;
