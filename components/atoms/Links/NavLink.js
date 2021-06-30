import Link from 'next/link';

import {StyledLink} from './Style'

const NavLink = ({ redirect, children }) => (
  <li>
    <Link  href={redirect} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  </li>
)

export default NavLink