import styled,{keyframes} from 'styled-components'

const fadeIn = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
`;


const Container = styled.div`
    display:flex;
    padding:8px;
    justify-content: center;
    position:relative;
    border-bottom:${({theme:{shadowCard}})=>shadowCard.borderBottom};
    box-shadow:${({theme:{shadowCard}})=>shadowCard.boxShadow};
`;



const SlideImage = styled.img`
        display:flex;
        width:80%;
        height:auto;
        src:${({src})=>src};  
        animation: ${fadeIn} 4s infinite;
    
`;

const DotsContainer = styled.div`
    position:absolute;
    bottom:0;
    
`;

const DotSpan = styled.span`
    cursor:pointer;
`;


export {Container, SlideImage,DotsContainer,DotSpan}