import React from "react";

const ListBlock = (props) => {
  return <article style={props.style}>{props.children}</article>;
};

export default ListBlock;
