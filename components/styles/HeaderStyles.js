import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.75%;
  font-size: 0.8rem;
  box-shadow: 0px 3px 6px rgb(138 135 135 / 40%);
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index:2;
  top: 0;
  height: var(--headerHeight);
  @media only screen and (max-width:767px){
      height: calc(var(--headerHeight)/2);
      padding: 0;
      justify-content: space-between;
  }
`;

export const Logo = styled.img`
  margin: 0.25rem 0;
  cursor: pointer;
  padding: 0 2%;
`;
