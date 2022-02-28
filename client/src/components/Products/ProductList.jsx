import React, { Fragment } from "react";
import { Container } from "reactstrap";
import "./product.scss";

const ProductList = (props) => {
  const cartHandler = (product) => {
    props.addTocart(product);
  };

  return (
    <Fragment>
      <Container>
        <div className="list-container">
          {props.filterData ? (
            <Fragment>
              {props.filterData.map((item) => {
                return (
                  <div className="cards" key={item.id}>
                    <div className="card-item">
                      <div className="card-image">
                        {" "}
                        <img
                          src={item.imageURL}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-info">
                        <p className="card-title">{item.name}</p>
                        <p className="card-intro">{item.description}</p>
                      </div>
                      <div className="card-footer">
                        <div className="card-footer-left">
                          <p>MRP Rs.{item.price}</p>
                        </div>
                        <div className="card-footer-right">
                          <button
                            className="btn btn-primary btn-buy-now"
                            onClick={() => cartHandler(item)}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          ) : (
            <Fragment>{null}</Fragment>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default ProductList;
