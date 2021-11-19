import styled from "styled-components";

export const RowStyles = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
img{
 width: 35%;
}
flex-direction: ${props => (props.oddEven % 2 === 0 ? "row" : "row-reverse")};
box-shadow: 0px -12px 28px -28px rgb(0 0 0 / 30%);
padding:20px;
`;
export const DescriptionStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 65%;
min-width: 200px;
`;