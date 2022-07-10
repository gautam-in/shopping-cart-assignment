import React from "react";
import offerImg from "../../static/images/lowest-price.png";

const CartOffer = () => {
  return (
    <>
      <div className="cart-offer">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-4">
              <img
                src={offerImg}
                alt="lowest price"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="col-8 align-items-center d-flex">
              <span className="d-block text-left">
                You won't find it cheaper anywhere
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartOffer;
