import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    flex-direction: row;
    @media(max-width: 480px) {
        display:flex;
        justify-content:space-evenly;
        align-items: center;
        flex-direction: column;
    }
`;

const LeftSection = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow:1;
`;

const RightSection = styled.div`
    display:flex;
    flex-grow:2;
    align-items: center;
    justify-content: center;
`;


export { Container, LeftSection, RightSection }