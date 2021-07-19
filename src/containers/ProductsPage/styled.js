import styled from "styled-components";

export const FlexColumn = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  flex: 0.3;
  background: #dfdada;
  white-space: nowrap;
  box-sizing: border-box;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex: 0.8;
  flex-wrap: wrap;
  /* padding-bottom: 10rem; */
`;

export const Product = styled.div`
  position: relative;
  box-sizing: border-box;
  width: calc(25% - 1rem);
  border: 2px solid #f0f0f0;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  border-bottom: 0.1rem dashed grey;
  /* margin-bottom: 5rem; */
  /* margin-left: 1rem; */
  /* margin-top: 30px; */
  margin: 20px 5px 30px 5px;
  padding: 10px;
  &:nth-child(4n + 1) {
    margin-left: 1rem;
    /* background: red; */
  }
`;

export const List = styled.ul`
  margin: auto;
  padding: 0;
  /* width: 100%; */
  list-style: none;
  /* padding-left: 20px; */
  /* background-color: #fff; */
  /* border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px; */
  /* border-top: 3px solid #9b8dab; */
  /* box-shadow: 0 3px 5px 0 rgba(0, /0, 0, 0.16); */

`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 30px;
  border-bottom: 1px solid #9b8dab;
  /* font-family:  'Consolas'; */
  letter-spacing: -1px;
  font-size: 1rem;
  /* font-weight: 600; */
  /* opacity: 0.8; */

  &:hover {
    /* border-top: none; */
    background: #fff;
    border-left: 3px solid grey;
    border-left: 3px solid #9b8dab;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  height: 5rem;
  font-size: 1.2rem;
  letter-spacing: -1px;
  font-weight: 800;
  margin-bottom: 2rem;
  /* font-family: "Consolas", sans-serif; */
`;
export const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /*number of lines to show*/
  -webkit-box-orient: vertical;
  font-size: 13px;
  line-height: 1.2rem;
  font-weight: 500;
  background: #f0f0f0;
  /* font-family: "Consolas"; */
  margin-bottom: 1rem;
`;

export const Section = styled.div`
  /* position: relative; */
  /* bottom: 0; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* overflow: hidden; */
`;

export const Price = styled.p`
  width: 50%;
  /* margin: 1rem; */
  font-size: 0.8rem;
  white-space: nowrap;
  /* line-height: ; */
  /* font-weight: 500; */
`;

export const Button = styled.button`
  background: #bf2957;
  color: #ffffff;
  /* margin: 1rem; */
  padding: 8px;
  white-space: nowrap;
  width: 50%;
  margin: 0;
  border: 0;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.1s ease-in;

  &:hover {
    background: #ffffff;
    color: #bf2957;
    border: 0.1rem solid #bf2957;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: #bf2957;
    color: #ffffff;
  }
`;

// export const FlexColumn  = styled.div`
//     display:flex;
//         /* flex-direction:column; */
// `;

// export const Sidebar = styled.div`
//     /* flex:0.2; */
//     background: #dfdada;
//     white-space: nowrap;
// `;

// export const ProductsContainer = styled.div`
// display: flex;
// /* flex:1; */
// flex-wrap: wrap;
// `;

// export const Product = styled.div`
// margin: auto;
// /* flex-basis: 0 0 25% 25%; */

// /* display: flex; */
// /* flex-direction: column; */
// position: relative;
// /* width:12rem; */
// width: calc(25% - 1rem);
// /* height: 38rem; */
// margin-right: 1rem;
// margin-top: 1rem;
// /* padding: 0 20px 0 20px;  */
//   box-shadow: 2px 0px 4px 0 rgba(0, 0, 0, 0.1);
// background: #fff;
// border-bottom: 0.2rem dashed grey;
// /* padding-bottom: 10rem; */
// &:nth-child(2n+1){
//     margin-left: 1rem;
//     /* background: red; */
// }
// `;

// export const List = styled.ul`
//   list-style: none;
//   padding: 0px 20px;
//   /* background-color: #fff; */
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   /* border-top: 3px solid #9b8dab; */
//   /* box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16); */
// `;

// export const ListItem = styled.li`
//   display: flex;
//   flex-direction: column;
//   padding: 10px 0px 10px 0px;
//   border-bottom: 1px solid #9b8dab;
//   :first-of-type {
//     /* border-top: none; */
//   }
// `;

// export const Title = styled.div`
//     /* margin-bottom:1.5rem; */
//     font-size:1.2rem;
//     font-weight: 600;
//     font-family:'Consolas';
//     padding: 20px;
//     letter-spacing: 0;
// `;
// export const Description = styled.div`
// height: fit-content;
//         padding: 0.5;
//         font-size: 1rem;
//         line-height: 1.2rem;
//         font-weight: 600;
//         background:  #f0f0f0;
//         margin-bottom: 1rem;

// /* margin: 10px auto;
// margin-top:1.5rem;
// font-size: 1rem;
// font-weight: 500;
// width: 100%;
// font-family:'Consolas'; */
// /* margin-inline: 10px; */
// background: #e1e5e9;

// `;

// export const Section = styled.div`
// /* display: none; */
// display: flex;
//     position: absolute;
//     bottom: 10px;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
// /* margin-bottom: 0;
// display: flex;
// align-items: center;
// justify-content: space-between;
// width: 100%; */
// /* background: gray; */
// `;

// export const Price = styled.p`
// font-size:1.2rem;
// font-weight: 600;
// font-family:'Consolas';
// `;

// export const Button = styled.button`
// font-size: 1.2rem;
// padding:15px 20px 15px 20px;
// width: 50%;
// border: none;
// background: #973860;
// color:#fff;
// /* float: right; */

// `;
