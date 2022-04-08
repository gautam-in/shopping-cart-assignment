import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoaderIndicator() {
    return (
        <Loader
        type="Oval"
        color="#00BFFF"
        height={80}
        width={80}
        style={{marginTop:'10rem',marginLeft:'50%',marginBottom:'5rem'}}
      />
    )
}

export default LoaderIndicator
