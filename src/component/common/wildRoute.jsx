import React from "react";

function wildRoute(props) {
  return (
    <div className="app-wildPage">
      <h2>{props.message || "Page Not Found , Kindly check Url"}</h2>
    </div>
  );
}

export default wildRoute;
