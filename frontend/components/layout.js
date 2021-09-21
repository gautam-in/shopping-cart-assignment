import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header from 'components/header';
import Footer from 'components/footer';

const GlobalStyles = createGlobalStyle`
    html {
        --red: #ff0000;
        --black: #393939;
        --primaryPink: #d10157;
        --grey: #3a3a3a;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(---lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --containerWidth: 80%;
        --blackLight: #504a4a;
        --materialBlue:#2196f3;
        --bs: '0 12px 24px 0 rgba(0,0,0, 0.09)';
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        /* font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        /* font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'Montserrat', sans-serif;
    }
`;

const InnerStyles = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem 2rem 0 2rem;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem 2rem 0 2rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    width: 100%;
    max-width: 100%;
  }
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </div>
  );
}

Layout.prototype = {
  children:
    PropTypes.oneOf[(PropTypes.node, PropTypes.arrayOf(PropTypes.node))],
};
