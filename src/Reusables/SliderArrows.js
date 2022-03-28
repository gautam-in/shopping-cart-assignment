import React from 'react';
import '../Scss/sliderall.scss';

function SliderArrows({ prevslide, nextSlide }) {
    return (
    <div className="SliderArrows">
        <span className='previous' onClick={prevslide}>&#10094; </span>
        <span className='next' onClick={nextSlide}>&#10095;</span>
    </div>
    )
}

export default SliderArrows;