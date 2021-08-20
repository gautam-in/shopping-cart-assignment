import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";

// const Logo = styled.h1`
//   font-size: 4rem;
//   margin-left: 2rem;
//   position: relative;
//   background: red;
//   z-index: 2;
//   transform: skew(-7deg);

//   a {
//     color: white;
//     text-decoration: none;
//     text-transform: uppercase;
//     padding: 0.5rem 1rem;
//   }
// `;

const HeaderStyles = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr 0.2fr;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <img src="/static/images/logo.png" />

        <Nav />
      </div>
    </HeaderStyles>
  );
}
