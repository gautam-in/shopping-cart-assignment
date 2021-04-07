import React from "react";
import ReactDOM from "react-dom";
import '../src/test.scss';

const Index = () => {
  return <div className="name">Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));