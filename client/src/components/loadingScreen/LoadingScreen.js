import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./LoadingScreen.scss";

function LoadingScreen() {
  return (
    <div className="model-container">
      <ThreeDots
        className="spinner-position"
        color="#00BFFF"
        height={80}
        width={80}
      />
    </div>
  );
}

export default LoadingScreen;
