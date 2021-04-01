import React, { useState } from 'react'
import styled from "styled-components"
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const getWidth = () => window.innerWidth;

const SliderComponent = styled.div`
    max-width: 1000px;
    position: relative;
    margin: 10px auto;
`;

const Slider = props => {

    const { slides: imgUrls } = props

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousSlide = () => {
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        setCurrentImageIndex(index);
    }

    const nextSlide = () => {
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        setCurrentImageIndex(index);
    }

    return (
        <SliderComponent>
            <Slide content={imgUrls[currentImageIndex]} />
            <Arrow direction="left" handleClick={previousSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            {/* <Dots slides={imgUrls} activeSlide={activeSlide} /> */}
        </SliderComponent>
    )
}

export default Slider