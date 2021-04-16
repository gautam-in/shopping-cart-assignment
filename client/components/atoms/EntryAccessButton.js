import React from "react";
import { Link } from "react-router-dom";

function EntryAccessButton({ linkTo, children }) {
  return <Link to={linkTo}>{children}</Link>;
}

export default EntryAccessButton;
