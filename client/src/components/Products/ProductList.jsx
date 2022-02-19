import React, { Fragment } from "react";
import { Container } from "reactstrap";
import "./product.scss";

const ProductList = (props) => {
  console.log();
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
                          <button className="btn btn-primary btn-buy-now">
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
            <Fragment>
              {props.productdata &&
                props.productdata.map((item) => {
                  return (
                    <div className="cards" key={item.id}>
                      <div className="card-item">
                        {/* <p className="card-title">{item.name}</p> */}
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
                            <button className="btn btn-primary btn-buy-now">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Fragment>
          )}
        </div>
      </Container>
      {/* <section class="main-section">a */}
      {/* {props.filterData &&
          props.filterData.map((item) => {
            return (
              <Fragment>
                <div className="main-card">
                  <p className="main-card-para">
                    <strong>{item.name}</strong>
                  </p>
                  <div class="card">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="img-fluid"
                    />
                    <p className="item-description">{item.description}</p>
                    <div className="card-footer">
                      <div className="card-footer-left">
                        <p>MRP Rs.{item.price}</p>
                      </div>
                      <div className="card-footer-right">
                        <button className="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })} */}

      {/* <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div> */}
      {/* </section> */}
      {/* <Container>
        <div className="product-list">
          <div className="product-list-item">
            <div className="product-list-item-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-list-item-info">
              <div className="product-list-item-info-name">Product Name</div>
              <div className="product-list-item-info-price">$100</div>
            </div>
          </div>

          <div className="product-list-item">
            <div className="product-list-item-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-list-item-info">
              <div className="product-list-item-info-name">Product Name</div>
              <div className="product-list-item-info-price">$100</div>
            </div>
          </div>

          <div className="product-list-item">
            <div className="product-list-item-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-list-item-info">
              <div className="product-list-item-info-name">Product Name</div>
              <div className="product-list-item-info-price">$100</div>
            </div>
          </div>

          <div className="product-list-item">
            <div className="product-list-item-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-list-item-info">
              <div className="product-list-item-info-name">Product Name</div>
              <div className="product-list-item-info-price">$100</div>
            </div>
          </div>

          <div className="product-list-item">
            <div className="product-list-item-image">
              <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-list-item-info">
              <div className="product-list-item-info-name">Product Name</div>
              <div className="product-list-item-info-price">$100</div>
            </div>
          </div>
        </div>
      </Container> */}
    </Fragment>
  );
};

export default ProductList;
