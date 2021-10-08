import React from "react";

import "./Test.scss";

export default (props) => {
  return (
    <div className="testingDiv">
      {[1, 2, 3, 4, 5].map(() => (
        <div className="box shadowTest1">
          <div className="container">Sample Test::: This is for shadow testing</div>
        </div>
      ))}
    </div>
  );
};