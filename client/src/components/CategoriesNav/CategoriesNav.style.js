import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const LinkCss = styled(NavLink)`
    text-decoration: none;
    color: #4e4e4e;
    background: none;
    padding: 10px 10px 10px 30px;
    border-bottom: 1px solid #bebebe;
    &:hover{
        background: #ddd;
        color: #4e4e4e;
    }
    &.active{
        background: #aaa;
        color: #fff;
    }
`