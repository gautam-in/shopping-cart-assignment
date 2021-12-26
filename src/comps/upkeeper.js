import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../bits/cat-card";
import { selectKatsKittens } from "../redux/selectors/kats";

const Ward = ({ Categories }) => {
  const katsMap = Categories.map(({ ...otherAttrs }, i) => {
    return <MenuItem key={i} {...otherAttrs} />;
  });
  return <div className="directory-menu">{katsMap}</div>;
};

const mapStateToProps = createStructuredSelector({
  Categories: selectKatsKittens,
});

export default connect(mapStateToProps)(Ward);
