import styled from "styled-components";

const MobileCategoryStyle = styled.div`
  flex-direction: column;
  width: 100%;
  position: fixed;
  background-color: var(--lightestgrey);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5%;
  
  display: none;
  height: fit-content;
  outline: none;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 767px) {
    display: flex;
    ul{
        padding:0;
        display: flex;
        flex-direction: column;
        margin: 0;
        display: ${(props) => (props.open ? "block" : "none")};
    }
  }
`;
export default MobileCategoryStyle;
