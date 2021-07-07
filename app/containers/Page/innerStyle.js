import styled from 'styled-components';

const InnerStyle = styled.main`
  max-width: ${props => props.theme.maxWidth}px;
  margin: 0 auto;
  padding-top: ${props => props.theme.headerHeight}px;
  right: 0;
  font-size: 0.75rem;

  @media only screen and (max-width: 767px) {
    max-width: 100%;
    padding-top: ${props => props.theme.headerHeight /2}px;
  }
`;
export default InnerStyle;
