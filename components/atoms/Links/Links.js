import {StyledLink,StyledExplore} from './style'
import Link from 'next/link';

export const MenuLink = ({ href, data }) => (
    <li>
      <Link  href={href} passHref>
        <StyledLink>{data.name}</StyledLink>
      </Link>
    </li>
  )


export const NavLink = ({ redirect, children }) => (
  <li>
    <Link  href={redirect} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  </li>
)


export const Explore = ({href,children})=>(
  <StyledExplore href={href}>{children}</StyledExplore>
)