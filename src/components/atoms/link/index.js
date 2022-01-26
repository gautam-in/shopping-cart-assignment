import React from "react";
import {string, any} from 'prop-types';
import { Link } from "react-router-dom";

const CustomLink = ({href, label, className, children}) => (
    <Link to={href} className={className}>{ children? children: label}</Link>
)

CustomLink.propTypes = {
    href: string,
    label: string,
    className: string,
    children: any
}

export default CustomLink;