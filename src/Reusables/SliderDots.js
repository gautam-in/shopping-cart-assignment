import React from 'react';
import '../Scss/sliderall.scss';

function SliderDots({activeIndex,onclick,sliderImage}){
    return(
        <div className='slider-dots'>
            {sliderImage.map((slide,index) => (
                <span
                    key={index}
                    className={`${activeIndex===index ? "dot active-dot" : "dot"}`}
                    onClick={()=>onclick(index)}
                ></span>
            ))
            }
        </div>
    )
}

export default SliderDots;