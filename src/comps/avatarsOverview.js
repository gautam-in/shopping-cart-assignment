import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection from "../bits/collection";
import { selectAvatarsSections } from "../redux/selectors/avatars";

const AvatarsOverview = ({ avatarsSections }) => (
  <div>
    <h1 className="title">Products</h1>
    {avatarsSections.map(({ ...thingsAttrs }, idx) => (
      <Collection key={idx} {...thingsAttrs} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  avatarsSections: selectAvatarsSections,
});

export default connect(mapStateToProps)(AvatarsOverview);
