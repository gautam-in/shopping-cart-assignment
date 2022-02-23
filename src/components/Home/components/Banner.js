import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { MediaURL } from '../../../Utils/httpServices';

function Banner(props) {
    const { bannerList = [] } = props

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });


    return (
        <div className='banner'>
            {
                bannerList.length > 0 ?
                    <>

                        <div className="navigation-wrapper">
                            <div ref={sliderRef} className="keen-slider">
                                {
                                    bannerList.map((item) => (
                                        <div key={item.id} className="keen-slider__slide number-slide">
                                            <img src={MediaURL + item.bannerImageUrl} alt={item.bannerImageAlt} />
                                        </div>
                                    ))
                                }


                                {/* <div className="keen-slider__slide number-slide3">3</div>
                                <div className="keen-slider__slide number-slide4">4</div>
                                <div className="keen-slider__slide number-slide5">5</div> */}
                            </div>
                        </div>
                        {loaded && instanceRef.current && (
                            <div className="dots">
                                {bannerList.map((item, index) => {
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                instanceRef.current?.moveToIdx(index);
                                            }}
                                            className={"dot" + (currentSlide === index ? " active" : "")}
                                        ></button>
                                    );
                                })}
                            </div>
                        )}
                    </>
                    :
                    null
            }
        </div>
    )
}

export default Banner