import styled from "styled-components";

export const HeaderStyle = styled.nav`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 769px) {
    width: var(--containerWidth);
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  box-shadow: 0 0 10px var(--gray);
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  img {
    width: 120px;
    cursor: pointer;
    padding: 10px;
  }

  ul {
    display: none;
    justify-content: flex-start;
    align-items: flex-end;
    list-style: none;
    margin: 5px;
    li {
      padding: 10px;
      padding-bottom: 20px;
      font-weight: bold;
      a {
        color: var(--darkGray);
      }
    }
  }

  /* For tablets */
  @media (min-width: 481px) {
    img {
      width: 150px;
      margin-right: 0px;
    }
    ul {
      display: flex;
    }
  }

  /* for desktops */
  @media only screen and (min-width: 769px) {
    img {
      width: 180px;
      margin-right: 50px;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    display: none;
    list-style: none;
    li {
      padding: 5px;
      font-size: 0.85rem;
    }
  }
  @media (min-width: 481px) {
    ul {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

export const CartIconStyle = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  min-width: 120px;
  background-color: var(--lightGray);
  align-items: center;
  font-size: 1rem;
  justify-content: flex-start;
  cursor: pointer;
  img {
    margin-right: 10px;
    width: 25px;
    filter: invert(24%) sepia(35%) saturate(4866%) hue-rotate(321deg)
      brightness(87%) contrast(90%);
  }
`;
