import styled from "styled-components";

const CategoryContainer = styled.section`
  padding: 2rem;
  margin: 2% 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  order: ${(props) => props.order};
  box-shadow: 0px 3px 6px rgb(138 135 135 / 40%);

  @media only screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export default CategoryContainer;