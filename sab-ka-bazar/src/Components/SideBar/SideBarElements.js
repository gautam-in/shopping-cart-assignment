import styled from "styled-components";

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 0 auto;
`;

const ListItem = styled.li`
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  border-bottom: 1px solid #d6d6d6;
  color: #8d8d8d;
  cursor: pointer;
`;

export { ListContainer, ListItem };
