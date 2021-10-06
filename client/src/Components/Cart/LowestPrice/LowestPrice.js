/* eslint-disable react/display-name */
import React from "react";

import "./LowestPrice.scss";

export default () => {
  return (
    <div className="lowest-price-section">
      <div className="main-container">
        <div className="img">
          <img src="/static/images/lowest-price.png" alt="lowest price" />
        </div>
        <div className="content flex-center">
          You wont find it cheaper anywhere.
        </div>
      </div>
    </div>
  );
};
