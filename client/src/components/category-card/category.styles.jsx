import styled from "styled-components";
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 10px 10px;
`;

export const CategoryCardContainer = styled.section`
  display: flex;
  flex-direction: ${(props) =>
    props.position % 2 === 0 ? `row-reverse;` : `row;`};
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 15px 10px -15px #111;
  margin-bottom: 3em;
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
  }
`;

export const CategoryImageContainer = styled.div`
  /* min-width: ; */
  flex: 1;
`;
export const CategoryImage = styled.img`
  width: 100%;
  height: auto;
  min-width: 200px;
`;
export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
