import { createGlobalStyle } from 'styled-components';

export const NavStyle = createGlobalStyle`

/* Layout css */
.layout {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 110rem;
  margin: 0 auto;
}

header {
  box-shadow: 0 1px 10px rgb(0 0 0 / 30%);
}


.cart-container {
  position: fixed;
  z-index: 999999;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
}

@media only screen and (max-width: 1023px) {
  .cart-container {
    background-color: rgba(0, 0, 0, 0);
  }
}


/* Header css  */

.nav {
  display: flex;
}

.nav-links {
  align-self: flex-end;
  padding-bottom: 2rem;
  flex-grow: 1;
}

.nav-logo-img {
  width: 215px;
  padding: 1rem;
}

.nav ul {
  margin-left: 4rem;
  list-style-type: none;
  display: flex;
  gap: 3rem;
  align-items: flex-end;
}

.nav-link:link,
.nav-link:visited {
  text-decoration: none;
  color: #6a6462;
  font-weight: bold;
}

.nav-link:hover,
.nav-link:active {
  text-decoration: underline;
  color: black;
  font-weight: bold;
}

.cart-item-count {
  color: #000;
  font-weight: bolder;
}

.nav-auth ul {
  padding: 4px;
}

.nav-carts-auth {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-carts {
  display: flex;
  cursor: pointer;
  gap: 5px;
  align-items: center;
  flex: 1;
  padding: 0 40px;
  background-color: #eaeaea;
}

@media only screen and (max-width: 767px) {
  .nav .nav-links {
    display: none;
  }

  .nav .nav-carts-auth .nav-auth {
    display: none;
  }

  .nav .nav-carts-auth {
    flex: 1;
    align-items: flex-end;
  }

  .nav .nav-logo-img {
    width: 115px;
  }
}

`;
