import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styled from "styled-components";
import { setCart } from "../actions/cartActions";
import { logout } from "../actions/userActions";
import { auth } from "../firebase";
import { useStore } from "../store/Store";
import Cart from "./Cart";

const NavWrapper = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media (max-width: 767px) {
    display: none;
  }

  .username {
    font-weight: bold;
  }
`;

const NavBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @media (max-width: 767px) {
    align-items: stretch;
    justify-content: flex-end;
    .navbottom-links {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  display: inline-block;
  padding: 5px;
  margin: 0 15px;

  &.active {
    color: var(--colorPrimary);
    font-weight: bold;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const LogoutBtn = styled.button`
  border: 0;
  background: transparent;
  margin-left: 15px;
  font-size: inherit;
  cursor: pointer;
`;

export default function Nav() {
  const router = useRouter();
  const [globalState, dispatch] = useStore();
  const user = globalState.user;
  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
    router.push("/");
    dispatch(setCart([]));
  };
  return (
    <NavWrapper>
      {!user && (
        <NavTop>
          <Link href="/signin" passHref>
            <NavLink
              className={`nav-link ${
                router.pathname == "/signin" ? "active" : ""
              }`}
            >
              SignIn
            </NavLink>
          </Link>
          <Link href="/register" passHref>
            <NavLink className={router.pathname == "/register" ? "active" : ""}>
              Register
            </NavLink>
          </Link>
        </NavTop>
      )}
      {user && (
        <NavTop>
          <span className="username">Hello, {user.userName.split(" ")[0]}</span>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </NavTop>
      )}
      <NavBottom>
        <div className="navbottom-links">
          <Link href="/" passHref>
            <NavLink className={router.pathname == "/" ? "active" : ""}>
              Home
            </NavLink>
          </Link>
          <Link href="/products" passHref>
            <NavLink
              className={router.pathname.includes("products") ? "active" : ""}
            >
              Products
            </NavLink>
          </Link>
        </div>
        <Cart />
      </NavBottom>
    </NavWrapper>
  );
}
