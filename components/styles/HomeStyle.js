import styled from 'styled-components';

export const CategoryStyle = styled.section`
  box-shadow: var(--boxShadow);
  display: flex;
  margin-top: 2em;
  div {
    flex: 1;
    padding: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }

  div img {
    object-fit: contain;
    width: 80%;
  }
  div article > * {
    margin-top: 1em;
  }
`;
