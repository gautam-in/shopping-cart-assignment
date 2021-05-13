import React from "react";

import "./index.scss";

const loader = (props) => {
  const { show } = props;

  return (
    <div className={`loading ${show ? "show" : "hide"}`}>
      <span className="loading-icon" />
    </div>
  );
};

export default loader;
