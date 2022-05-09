import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    padding: 0 50px;

    @media (max-width: 990px){
      padding: 0 16px;
    }

    @media screen and (min-width: 1442px){
      max-width: 1440px;
    }

    @media (min-width:992px){
      max-width: none;
    }
`

function Layout({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Layout;