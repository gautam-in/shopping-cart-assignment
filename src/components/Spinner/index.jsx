import React, { Component } from "react";
import Spinner from "../../assets/spinner.svg";
import "./Loader.scss";

class Loader extends Component {
  render() {
    return (
      <section>
        <img className="spinner" src={Spinner} alt="Loading Spinner" />
      </section>
    );
  }
}

export default Loader;
