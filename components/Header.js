import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Image from "next/image";

const HeaderStyles = styled.header`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .navbar-brand {
    padding: 5px 5px 2px 5px;
    width: 20%;

    @media (max-width: 767px) {
      width: 30%;
    }
  }

  .logo {
    width: 100px;
    height: auto;
  }
`;

const NavContainer = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <NavContainer>
        <Link href="/" passHref>
          <a className="navbar-brand">
            <Image
              src="/static/images/logo.png"
              alt="Sabka Bazaar"
              className="logo"
              width="190"
              height="86"
            />
          </a>
        </Link>
        <Nav />
      </NavContainer>
    </HeaderStyles>
  );
}
