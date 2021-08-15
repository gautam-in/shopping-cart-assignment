import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: var(--grey);
  text-align: center;
  padding: 1em;
  font-size: 0.7em;
  font-weight: bold;

  @media (min-width: 1025px) {
    font-size: 1em;
    padding-left: 20em;
    text-align: left;
  }
`;
