import React from "react";
import defaultImg from "../../static/images/default.jpeg";

const ProductCard = ({ data, addToCart }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 shadow" role={"group"}>
        <div className="product-card shadow">
          <div className="container-fluid mx-auto">
            <h1 className="product-name" role={"heading"}>
              {data.name}
            </h1>
            <div className="row">
              <div className="col-5 col-md-12 p-2">
                <img
                  src={data.imageURL || defaultImg}
                  alt={data.name}
                  width="100%"
                  height={"100%"}
                />
              </div>
              <div className="col-7 col-md-12 p-2">
                <div className="card-meta">
                  <p className="description fs-small">{data.description}</p>
                  <div className="product-meta">
                    <span
                      className="price d-md-block d-none fs-small"
                      role={"contentinfo"}
                    >
                      <b>MRP Rs.{data.price}</b>
                    </span>
                    <button
                      className="btn fs-small"
                      onClick={() => {
                        addToCart({ data: { ...data, qty: 1 } });
                      }}
                    >
                      Buy Now{" "}
                      <span className="mview-info d-md-none d-inline-block">
                        MRP Rs.{data.price}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
