import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from '../styles/header.module.scss';
import CartIcon from '../public/images/cart.svg';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { cartCount, toggleCart } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/products' },
    { title: 'Sign In', url: '/login' },
    { title: 'Register', url: '/register' },
  ];

  return (
    <header className={classes.header}>
      <Image
        src='/images/logo_2x.png'
        height={60}
        width={120}
        alt='Sabka Bazaar'
      />
      <nav
        className={`${classes.navigation} ${
          isMenuOpen ? classes.showNavigation : ''
        }`}
      >
        <ol>
          {links.map(({ title, url }) => (
            <li className={classes.navItems} key={url}>
              <Link href={url}>
                <a onClick={toggleMenu}>{title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <button className={classes.cartButton} onClick={toggleCart}>
        <Image src={CartIcon} alt='cart' />
        &nbsp;&nbsp;{cartCount}&nbsp;items
      </button>

      <button
        className={`${classes.hamburger} ${isMenuOpen ? classes.close : ''}`}
        onClick={toggleMenu}
      >
        <span />
      </button>
    </header>
  );
};

Header.propTypes = {
  toggleCart: PropTypes.func,
};

Header.defaultProps = {
  toggleCart: () => void 0,
};

export default Header;
