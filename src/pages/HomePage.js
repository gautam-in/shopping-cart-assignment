import React from 'react'
import { Hero } from '../components'
import styled from 'styled-components';

const styledContainer = styled.div`
position:relative;
overflow:hidden;
`;

const HomePage = () => {
  return (
    <main>
    <styledContainer>
      <Hero />
      </styledContainer>
    </main>
  )
}

export default HomePage
