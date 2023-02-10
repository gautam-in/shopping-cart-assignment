import React from "react";
import loader from "../../assets/images/loader.gif";

function Loader() {
  return (
    <div className="my-5 text-center">
      <img src={loader} alt="loading" />
    </div>
  );
}

export default Loader;
