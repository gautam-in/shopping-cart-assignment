import React from "react";
import { string, any } from 'prop-types';
import { Link } from "react-router-dom";

const CustomLink = ({ href, label, className, children, ...props }) => (
    <Link to={href} className={className} {...props}>{children ? children : label}</Link>
)

CustomLink.propTypes = {
    href: string.isRequired,
    label: string,
    className: string,
    children: any
}

export default CustomLink;