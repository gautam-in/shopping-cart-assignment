import React from 'react';
import '../Scss/sliderall.scss';

function SliderContent({ activeIndex, sliderImage }) {
    return(
    <section>
        <div>
            {sliderImage.map((slide,index)=>(
                <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                    <img className="slider-image" src={slide.bannerImageUrl} alt={slide.bannerImageUrl} />
                </div>
            ))}
        </div>
    </section>
    )

}

export default SliderContent;