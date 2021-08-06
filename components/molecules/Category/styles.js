import styled from 'styled-components'

const Container = styled.div`
        box-shadow: 0 4px 8px -8px black;
        margin-bottom:20px;
        align-items: center;
        display:flex;
        padding: 12px 10px 24px 10px;
        justify-content: center;
        flex-direction:${props => props.flexDirection || "row"}
`; 


const LeftSection = styled.div`
    display:flex;
    flex-basis:40%;
`;

const RightSection = styled.div`
   display:flex;
   flex-direction:column;  
   align-items   : center;
   flex-wrap: wrap;
   flex-basis: 40%;
`;

export  {
    Container,
    LeftSection,
    RightSection
}
