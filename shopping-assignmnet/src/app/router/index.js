import React from "react";
import Login from "../../component/auth/login";
import App from "../../App";
import ProductView from "../../component/product/productView";
const Banner = React.lazy(() => import("../../component/banner/banner"));
export { Login, App, ProductView, Banner };
