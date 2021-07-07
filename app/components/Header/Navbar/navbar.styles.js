import styled from 'styled-components';

const NavBarStyles = styled.nav`
  flex: 0 0 45%;
  align-self: flex-end;
  color: ${props => props.theme.grey};
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin-right: 1rem;
  
  }
  li a {
    padding: 5px 0;
    transition: color 0.2s;
  }
  li a:hover{
    color: ${props => props.theme.black};   
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export default NavBarStyles;
