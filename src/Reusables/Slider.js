import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';
import '../Scss/sliderall.scss';
function Slider({ sliderD }) {
    const length = sliderD.length - 1;
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
        }, 5000)
        return () => clearInterval(interval);
    }, [activeIndex])
    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} sliderImage={sliderD} />
            <SliderArrows prevslide={() => setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)} />
            <SliderDots activeIndex={activeIndex} sliderImage={sliderD} onclick={activeIndex => setActiveIndex(activeIndex)} />
        </div>
    );
}

export default Slider;