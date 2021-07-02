import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color:${props => props.theme.lightgrey};
  position: fixed;
  bottom: 0;
  z-index: 1;
  font-size: 0.8rem;
  height: ${props => props.theme.footerHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 767px) {
    margin: 0;
    font-size: 0.6rem;
    height:${props => props.theme.footerHeight -10}px;
    width: 100%;
  }
`;

export default FooterStyle;
