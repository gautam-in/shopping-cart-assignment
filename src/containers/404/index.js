import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/common/button";

import "./index.scss";

import label from "./data/index.json";

const NotFound = () => {
  return (
    <div className="_404_container">
      <div className="_404_content">
        <div className="_404_msg_container">
          <h1>{label.title}</h1>
        </div>
        <div className="_404_msg_description">
          <span>{label.description}</span>
        </div>
      </div>
      <div className="button_container">
        <Link to="/">
          <Button variant="primary" className="btn-block">
            {label.ctaLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
