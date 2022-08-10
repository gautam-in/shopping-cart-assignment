import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const LinkCss = styled(NavLink)`
    text-decoration: none;
    color: #989898;
    background: none;
    padding: 10px 10px 10px 30px;
    border-bottom: 1px solid #bebebe;
    &:hover{
        background: #ddd;
        color: #a4a2a2;
    }
    &.active{
        background: #aaa;
        color: #fff;
    }
`