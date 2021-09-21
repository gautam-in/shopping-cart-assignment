import Navigation from './nav';
import Cart from '../cart';

import { HeaderStyles, LogoWrapper, HeaderWrapper } from 'styles/header.styled';

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderWrapper>
        <LogoWrapper>
          {/* <img
            src="/static/images/logo.png"
            alt="Sabka Bazar Logo"
            srcSet="/static/images/logo.png 800w,
          /static/images/logo_2x.png 801w"
            sizes="(max-width: 800px) 600px, 600px"
          /> */}
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/static/images/logo.png"
              width={60}
            />
            <source
              media="(min-width: 768px) and (max-width: 1050px)"
              srcSet="/static/images/logo_2x.png"
              width={120}
            />
            <source
              media="(min-width: 1051px)"
              srcSet="/static/images/logo_2x.png"
              width={150}
            />
            <img src="/static/images/logo.png" alt="Sabka Bazar Logo" />
          </picture>
        </LogoWrapper>
        <Navigation />
      </HeaderWrapper>
      <Cart />
    </HeaderStyles>
  );
};

export default Header;
