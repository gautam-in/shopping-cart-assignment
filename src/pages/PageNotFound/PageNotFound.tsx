import React from "react";
import searchImage from "../../../public/static/images/search.png";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
        <section className="page-not-found__content">
          <div>4</div>

          <div className="page-not-found__image">
            <img src={searchImage} alt="404 page not found"/>
          </div>

          <div>4</div>
        </section>

        <section className="links-to-try">
          <h2>Page Not Found</h2>
          <h4>Please try using the below links</h4>
          <div className="available-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/signin"}>SignIn</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/products/all"}>Products</Link>
          </div>
        </section>
        
    </div>
  )
}

export default PageNotFound;
