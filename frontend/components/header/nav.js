import Link from 'next/link';

import CartButton from 'components/cartButton';

import {
  NavWrapper,
  NavElementLeftWrapper,
  NavElementRightWrapper,
  AccountActionWrapper,
} from 'styles/header.styled';

const Navigation = () => {
  return (
    <NavWrapper>
      <NavElementLeftWrapper>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </NavElementLeftWrapper>
      <NavElementRightWrapper>
        <AccountActionWrapper>
          <Link href="/page__login">Signin</Link>
          <Link href="/page__signup">Register</Link>
        </AccountActionWrapper>
        <CartButton />
      </NavElementRightWrapper>
    </NavWrapper>
  );
};

export default Navigation;
