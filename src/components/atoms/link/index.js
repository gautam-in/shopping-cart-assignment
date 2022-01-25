import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({href, label, children}) => (
    <Link to={href}>{ children? children: label}</Link>
)

export default CustomLink;