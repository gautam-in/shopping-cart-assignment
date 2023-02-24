import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={`container ${styles["not-found"]}`}>
      <div>
        <h2>404</h2>
        <p>Ooops, page not found.</p>
        <button className="--btn">
          <Link to="/">&larr; Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
