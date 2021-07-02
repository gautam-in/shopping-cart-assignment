import styled from "styled-components";

const SideNavListStyles = styled.li`
  list-style: none;
  margin: 0;
  width: 100%;
  border-bottom: 1px solid var(--grey);
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  order: ${(props) => props.order};
  ${(props) =>
    props.active
      ? `background-color: var(--magenta);
    color: var(--white);`
      : ""}
  &:hover {
    background-color: var(--magenta);
    color: var(--white);
  }

  @media only screen and (max-width:767px){
    padding: 0.5rem;
  }
 
`;

export default SideNavListStyles;
