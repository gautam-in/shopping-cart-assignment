import styled from 'styled-components';

const SideNavStyles = styled.nav`
  display: block;
  height: 100vh;
  position: fixed;
  background-color: ${props => props.theme.lightestgrey};
  width: ${props => props.theme.sideNavWidth}px;
  color: ${props => props.theme.grey};
  font-size: 0.8rem;
  font-weight: 600;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

export default SideNavStyles;
