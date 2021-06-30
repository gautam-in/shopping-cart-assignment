import styled from "styled-components";
import Link from 'next/link';


const StyledLink = styled.a`
    color:#6c707c;
    font-family: 'Arial Narrow Bold';
    padding:5px;
`

const NavLink = ({ redirect, children }) => (
  <Link  href={redirect} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
)

export {
    NavLink
}