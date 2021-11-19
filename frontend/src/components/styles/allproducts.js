import styled from 'styled-components';

export const AllProductsStyles = styled.div`
 display: flex;
 min-height: 100vh;
`;

export const SideNavStyles = styled.aside`
 display: flex;
 flex: 1 1 25%;
 flex-direction: column;
 background: var(--grey);

`;

export const NavlinkStyles = styled.ul`
list-style: none;
padding: 0 10px;
li{
  a{
  display: block;
  font-size: 18px;
  padding: 15px;
  border-bottom:1px solid var(--black);
  &:hover{
    background: darkgray;
    text-decoration: none;
  }
  }
}
`;

export const ProductsSectionStyles = styled.section`
 display: flex;
 flex: 1 1 75%;
 flex-wrap: wrap;
 justify-content: space-around;
 .singleItem{
   flex: 1 1 30%;
   @media only screen and (min-width: 768px) {
    flex: 0 0 30%;
  }
   padding: 10px;
   margin-bottom: 20px;
   border: 1px solid var(--red);
   justify-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: column;
    img{
      max-width: 200px;
      max-height: 150px;
    }
    .itemHead{
      min-height: 50px;
      font-size: 16px;
      margin: 0;
    }
    .itemDescription{
      min-height: 100px;
      font-size: 12px;
      background: var(--grey);
      padding: 5px;
    }
    .itemButs{
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
       margin: 0;
    }
 }
`;