import styled from "styled-components";
import Link from "next/link";

export const SidebarContainer = styled.aside`
    background-color: gainsboro;
`

export const SidebarCategoriesList = styled.ul`
    list-style-type: none;
`

export const CategoryItem = styled.li`
    border-bottom: 1px solid #888;
    cursor: pointer;
`

export const StyledLink = styled.a`
    display: inline-block;
    font-size: 1.2rem;
    padding: 1.2rem 1.8rem;
    font-weight: 500;
    color: #333;
`