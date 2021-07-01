import styled from 'styled-components';

export const MobileCategoryStyle = styled.div`
  flex-direction: column;
  width: 100%;
  position: fixed;
  background-color: var(--lightestgrey);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5%;
  height: fit-content;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    margin: 0;
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;

export const MobileNavSelectedStyle = styled.div`
  text-align: center;
  padding: 0.5rem;
  background-color: var(--magenta);
  color: var(--white);
  .chevron-icon {
    float: right;
    transition: 0.2s;
  }
`;
 


