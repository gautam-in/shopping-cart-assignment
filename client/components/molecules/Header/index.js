import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HeaderWrapper,
  Navigation,
  CartContainer,
  CartButton,
  CartIcon,
  ItemsCount,
  HeaderContainer,
} from "./Header.styles";
import Logo from "../../../public/images/logo_2x.png";
import { useCart } from "../../../global/utils/useCart";
import CartSection from "../CartSection";
import { useCallback } from "react";

const Header = () => {
  const { toggleCart, getCartItemsCount } = useCart();
  const router = useRouter();
  const cartItemsCount = getCartItemsCount();
  const cartButtonLabel = `item${cartItemsCount !== 1 ? "s" : ""}`;

  const onLogoClick = useCallback(() => {
    router.push("/");
  });

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Image
          src={Logo}
          alt="Sabka Bazaar logo"
          width="142"
          height="64"
          onClick={onLogoClick}
        />
        <Navigation aria-label="Site navigation">
          <Link href="/home">Home</Link>
          <Link href="/products">Products</Link>
        </Navigation>
        <CartContainer>
          <Navigation aria-label="login navigation">
            <Link href="/login">Sign in</Link>
            <Link href="/register">Register</Link>
          </Navigation>
          <CartButton
            aria-label="Cart items"
            title={`Cart button ${cartItemsCount} ${cartButtonLabel}`}
            onClick={toggleCart}
          >
            <CartIcon />
            <ItemsCount>
              {cartItemsCount} <span>{cartButtonLabel}</span>
            </ItemsCount>
          </CartButton>
        </CartContainer>
      </HeaderContainer>
      <CartSection />
    </HeaderWrapper>
  );
};

export default Header;
