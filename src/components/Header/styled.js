import styled from "styled-components";

export const Wrapper = styled.div`
/* position: sticky;
top:0; */
  /* display: flex; */
  /* justify-content: center; */
  border-bottom: 2px solid #e8dfdf;
  z-index: 999;
  box-shadow: 0 8px 6px -6px #eaeaea;
  background-color: #fff;
  /*${({ theme }) => theme.colors.headerBg};*/
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  /* background-color: yellow; */
  /* width: 71rem; */
  /* max-width: 60rem;
  min-width: 60rem; */

  /* @media (max-width: 1100px) {
    min-width: 30rem;
    max-width: 22rem;
  } */
`;

export const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
`;
// export const AuthLinks = styled.a``;
// export const CartWrap = styled.a``;
