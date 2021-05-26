import React from "react";
import { Link } from "react-router-dom";

function EntryAccessButton({ linkTo, children }) {
  return (
    <span style={{ marginLeft: "20px" }}>
      <Link to={linkTo}>{children}</Link>
    </span>
  );
}

export default EntryAccessButton;
