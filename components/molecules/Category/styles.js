import styled from 'styled-components'

const Container = styled.div`
        width:100%;
        box-shadow: 0 4px 8px -8px black;
        margin-bottom:20px;
        align-items: center;
        display:flex;
        padding: 12px 10px 24px 10px;
        justify-content: space-around;
`; 


const LeftSection = styled.div`
    display:flex;    
`;

const RightSection = styled.div`
   display:flex;
   flex-direction:column;  
   align-items   : center;
`;

export  {
    Container,
    LeftSection,
    RightSection
}
