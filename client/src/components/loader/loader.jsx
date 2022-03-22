import { memo } from "react";
import "./loader.scss";

const Loader = () => (
  <div>
    <div className="loader-outer"></div>
    <div className="loader"></div>
  </div>
);

export default memo(Loader);
