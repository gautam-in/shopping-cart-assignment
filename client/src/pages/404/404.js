import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import H1 from "../../components/Typography/H1";
import H3 from "../../components/Typography/H3";
import P from "../../components/Typography/P";

const NotFoundContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    text-align: center;
    margin: 100px 0px;

    & h1,h3,h4 {
        padding: 10px 0px;
    }

    & a {
        color: #547aef;
        cursor: pointer;
    }
`;

export default function NotFound() {
  return (
    <Fragment>
      <NotFoundContainer>
        <H1 fontSize="5em">404</H1>
        <H3>Sorry, this page isn't available.</H3>
        <P>
          The link you followed may be broken, or the page may have been
          removed. Go back to <Link to="/"> Sabka Bazaar</Link>
        </P>
      </NotFoundContainer>
    </Fragment>
  );
}
