import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const ProductList = ({ filterData: filteredProducts }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="list-container">
        {filteredProducts.map((product) => {
          return (
            <div className="cards" key={product.id}>
              <div className="card-item">
                <div className="card-image">
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
                <div className="card-info">
                  <p className="card-title">{product.name}</p>
                  <p className="card-intro">{product.description}</p>
                </div>
                <div className="card-footer">
                  <div className="card-footer-left">
                    <p>MRP Rs.{product.price}</p>
                  </div>
                  <div className="card-footer-right">
                    <button
                      className="btn btn-primary btn-buy-now"
                      onClick={() => dispatch(addItem(product))}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
