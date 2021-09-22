import React from "react";
import "./LoaderCarousel.scss";

export default function LoaderCarousel({ error }) {
  return (
    <div className="skeleton content-loader">
      <div className="skeleton-text-loading">
        {error ? "Error" : "Loading..."}
      </div>
    </div>
  );
}
