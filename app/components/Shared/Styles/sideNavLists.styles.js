import styled from 'styled-components';

const SideNavListStyles = styled.li`
  list-style: none;
  margin: 0;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.grey};
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  order: ${(props) => props.order};
  &:hover {
    background-color: ${props => props.theme.magenta};
    color: ${props => props.theme.white};
    transition: background-color 0.2s, color 0.2s;
  }
  &.active {
    background-color: ${props => props.theme.magenta};
    color: ${props => props.theme.white};
  }
  @media only screen and (max-width: 767px) {
    padding: 0.5rem;
  }
`;

export default SideNavListStyles;
