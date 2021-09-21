import styled from 'styled-components';

export const MenuWrapper = styled.select`
  width: 100vw;
  height: 50px;

  background-color: var(--primaryPink);

  color: white;

  margin-left: -2rem;

  padding: 1rem;
  padding-left: 2rem;

  margin-bottom: 2rem;

  display: none;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
    margin-bottom: 0.2rem;
  }
`;
