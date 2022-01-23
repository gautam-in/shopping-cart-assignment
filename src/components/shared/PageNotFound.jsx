import React from "react";

export default function PageNotFound(props) {
  return (
    <div className="app-pageNotFound">
      <h2>{props.message || "Oops!!! Something went wrong."}</h2>
    </div>
  );
}