import { NavLink } from "react-router-dom";

import { Button, Flex } from "../../atoms";
import { useCartStore } from "../../../cart.store";
import { CartIcon } from "../../atoms/icons";

import "./nav.scss";

type NavigationBarProps = {
  onCartClick: () => void;
};

export function NavigationBar(props: NavigationBarProps) {
  const cartItems = useCartStore((state) => state.cart).length;

  return (
    <nav className="navbar flex justify-around p-md">
      <Flex align="center" gap="xl" className="navbar__links">
        <NavLink to="/" className="navbar__logo">
          <img
            srcSet="/images/logo.png 1x, /images/logo_2x.png 2x"
            src="/images/logo.png"
            alt="Logo"
            className="w-full h-full"
          />
        </NavLink>

        <NavLink className="navbar__link" to="/">
          Home
        </NavLink>
        <NavLink className="navbar__link" to="/products">
          Products
        </NavLink>
      </Flex>

      <Flex align="center" gap="xl" className="navbar__actions">
        <Button
          variant="ghost"
          onClick={props.onCartClick}
          className="navbar__cart"
        >
          <Flex gap="xs">
            <CartIcon />
            {cartItems} items
          </Flex>
        </Button>
        <NavLink className="navbar__action" to="/register">
          Register
        </NavLink>
        <NavLink className="navbar__action" to="/login">
          Login
        </NavLink>
      </Flex>
    </nav>
  );
}
