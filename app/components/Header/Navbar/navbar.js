import NavBarStyles from './navbar.styles';
import Link from 'next/link';
import { navbarLinks } from './navbar.constants';
import withErrorHandler from '../../../ErrorBoundary/withErrorHandler';

const renderNavbarList = (navbarLinks) => {
  return navbarLinks.map(({id, name, href}) =>{
      return(
        <li key={id}>
        <Link href={href}>{name}</Link>
      </li>
      )
  })
}
const Navbar = () =>{
    return(
        <NavBarStyles>
        <ul>
        {renderNavbarList(navbarLinks)}
        </ul>
      </NavBarStyles>
    )
}

export default withErrorHandler(Navbar);