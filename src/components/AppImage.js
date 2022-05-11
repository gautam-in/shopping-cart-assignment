import React, { useState, useEffect} from 'react'
import styled, { keyframes, css } from 'styled-components'

const forwardImageAnimation = keyframes`
0%{
  right: -50%;
}
100%{
  right: 5%;
}
`;

const backwardImageAnimation = keyframes`
0%{
  left: -50%;
}
100%{
  left: 5%;
}
`;

const StyledImageContainer = styled.div`
width:80%;
height:80%;
position: absolute;
${props => props.imageDir === 'forward' ? 
css`
animation: ${forwardImageAnimation} 1s ease;
right:0%;
`: css`
animation: ${backwardImageAnimation} 1s ease;
left:5%;
` }
`;
const StyledImage = styled.img`
width:100%;
height:100%;

`;

export const AppImage = ({src, imageDir}) => {
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        setCurrentImage(src);
    }, [src]);
  return (
    <>
    {
        currentImage === src && <StyledImageContainer imageDir={imageDir}>
        <StyledImage src={src}/>
        </StyledImageContainer>
    }
    </>
  );
};
export default AppImage;
