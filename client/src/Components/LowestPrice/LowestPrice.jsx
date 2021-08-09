import React from "react";

import "./LowestPrice.scss";

export default () => {
  return (
    <div className="lowest-price-section">
      <div className="main-container">
        <div className="img">
          <img src="/images/lowest-price.png" alt="lowest price" />
        </div>
        <div className="content flex-center">
          You won't find it cheaper anywhere.
        </div>
      </div>
    </div>
  );
};
