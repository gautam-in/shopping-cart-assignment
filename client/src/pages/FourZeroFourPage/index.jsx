import React from 'react'
import Wrapper from '../../components/Utilities/Wrapper';
import { FourZeroFourContainer, FourZeroFourBody } from './FourZeroFourPage.styled';

const FourZeroFourPage = () => {
  return (
    <FourZeroFourContainer>
        <Wrapper>
          <FourZeroFourBody>
          <h3>404 Page not found</h3>
          <p>The requested page cannot be found.</p>
          <p>Please check the address and spelling.</p>
          </FourZeroFourBody>
        </Wrapper>
    </FourZeroFourContainer>
  )
}

export default FourZeroFourPage;