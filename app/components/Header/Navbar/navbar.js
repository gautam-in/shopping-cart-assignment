import NavBarStyles from './navbar.styles';
import Link from 'next/link';

const Navbar = () =>{
    return(
        <NavBarStyles>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </NavBarStyles>
    )
}

export default Navbar;