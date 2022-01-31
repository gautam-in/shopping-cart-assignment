import React from "react";
//import { Link } from "react-router-dom";
import NotFoundImage from "../../Assets/images/Scarecrow.png";
import "./styles.scss";
export default () => (
  <div>
    <div className="image-container">
      <img src={NotFoundImage} alt="Scare Crow" />
    </div>

    <div className="content-container">
      <h1>I have bad news for you</h1>
      <p>
        The page are you looking for might be removed or temporaly unavalible
      </p>

      {/* <Link to="/">Back to hompage</Link> */}
    </div>
  </div>
);
