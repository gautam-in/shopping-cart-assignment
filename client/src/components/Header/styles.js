import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  font-size: 90%;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
  overflow-y: hidden;
  background-color: #fff;

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    font-size: 85%;
  }
`;

export const Navbar = styled.nav`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    width: 95%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 95%;
  }
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
        row-gap: 20px;
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

  // Large screen mobiles 
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    column-gap: 8px;
    ${({ dir }) => {
      if(dir === "right") {
        return `
          justify-content: space-around;
          width: 60%;
        `;
      }
    }}
  }

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    ${({ dir }) => {
      if(dir === "right") {
        return `
          width: 30%;
        `;
      }
    }}
  }
`;

export const Cart = styled.div`
  width: 25%;
  background-color: #eeeeee;
  padding: 12px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
  svg {
    height: 20px;
    width: 20px;
    path {
      fill: #BF2957;
    }
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 60%;
    padding: 8px;
    svg {
      height: 16px;
      width: 16px;
    }
  }

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    width: 30%;
  }
`;

export const ImgContainer = styled.div`
  height: 60px;
  width: 120px;
  img {
    height: 100%;
    width: 100%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    height: 30px;
    width: 60px;
  }
`;
