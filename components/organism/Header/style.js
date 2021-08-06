import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    box-shadow: 0 4px 6px -6px #777;
`;

const LeftSection = styled.div`
    display:flex;
`;

const RightSection  = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

export {Container,LeftSection,RightSection}