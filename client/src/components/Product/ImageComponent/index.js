import React from 'react';
import LazyLoad from 'react-lazyload';
import Styled from "styled-components";

const ImageContainer = Styled.div`
    width: ${props => props.width ? props.width : 'unset'};
`

const Image = Styled.img`
  width: 100%;
  height: auto;
`;


function ImageComponent({src,alt,width,height,containerWidth}) {
  return (
    <>
        <ImageContainer width={containerWidth}>
            <Image src={src} alt={alt} width={width} height={height}/>
        </ImageContainer>
    </>
  )
}

export default ImageComponent;