import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.img`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  a,img {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    width: 100px;
    height: 100px;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    display: flex;
    flex-direction: row;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--secondary, black);
  }

  .separator {
    height: 10px;
    width: 100%;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
         <img loading="lazy" src="/static/images/logo.png" loading="lazy" alt="Sabka Bazar" width="100px" height="50px"/>
         <Nav />
      </div>
      <div className="gradient separator"></div>
      <div className="sub-bar">

      </div>
    </HeaderStyles>
  );
}