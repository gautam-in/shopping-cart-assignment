import React from "react";

function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h1 className="loader">Loading...</h1>;
    } else {
      return <Component {...props} />;
    }
  };
}

export default WithLoading;
