import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  font-size: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Navbar = styled.nav`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  width: 50%;
  display: flex;
  ${({ dir }) => {
    if(dir === "left") {
      return `
        padding: 5px 0;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      `;
    } else if(dir === "right") {
      return `
        flex-direction: column;
        align-items: flex-end;
        row-gap: 30px;
      `;
    }
  }}
`;

export const NavOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 20px;
  ${({ dir }) => {
    if(dir === "left") {
      return `
        align-self: flex-end;
      `
    } else if(dir === "right") {
      return `
        padding-top: 5px;
        width: 25%;
      `;
    }
  }}
`;

export const Cart = styled.div`
  width: 25%;
  background-color: #eeeeee;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  svg {
    height: 20px;
    width: 20px;
    path {
      fill: #BF2957;
    }
  }
`;

export const ImgContainer = styled.div`
  height: 60px;
  width: 120px;
  img {
    height: 100%;
    width: 100%;
  }
`;
