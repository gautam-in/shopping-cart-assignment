import React from 'react';
import styled from 'styled-components';
import Nav from './fragments/Nav';

const HeaderStyles = styled.header`
  height: 7rem;
  .bar {
    height: 7rem;
    position: fixed;
    width: 100%;
    top: 0;
    background: white;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    box-shadow: 0px 2px 13px 2px #bbbbbb;
    h1 {
      margin: 0%;
      padding-top: 3%;
      padding-left: 1%;
      img {
        height: 3rem;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    .bar h1 {
      margin: 0%;
      padding-top: 1%;
      padding-left: 10%;
      img {
        height: 5rem;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderStyles>
      <div className='bar'>
        <h1>
          <img
            srcSet='./logo_2x.png 480w,
          ./logo.png 800w'
            sizes='(max-width: 600px) 480px,
         800px'
            src='./logo_2x.png'
            alt='SABKA BAZAAR'></img>
        </h1>
        <Nav />
      </div>
    </HeaderStyles>
  );
}
export default Header;
