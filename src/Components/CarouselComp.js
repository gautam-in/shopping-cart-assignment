import React, { useState, useEffect } from "react";
import '../CSS/CarouselComp.css';
import { useDispatch, useSelector } from 'react-redux';
import { bannerList } from '../actions/banners.action';


const CarouselComp = () => {
    const dispatch = useDispatch();
    const banners = useSelector((state) => state.banners)

    useEffect(() => {
       dispatch(bannerList())
       
    }, [dispatch])

    const [current, setCurrent] = useState(0);
    const length = banners !== undefined ? banners.length : 0;

    const leftClickHandler = () => {
       setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const rightClickHandler = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current)
    }
    return (
        <div className="slideShow">
            {banners && banners.map((banner, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={banner.id}>
                    {index === current && <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />}
                    
                </div>
            ))
            }
            <button onClick={leftClickHandler} className="arrows leftArrow">
                &larr;
            </button>
            <button onClick={rightClickHandler} className="arrows rightArrow">
                &rarr;
            </button>

            <div className="slideShowDots">
                {
                    banners.map((banner, index) => (
                        <div key={banner.id} className={index === current ? 'slideshowDot active' : 'slideshowDot'} data-slide={banner.order} onClick={() => {
                            setCurrent(banner.order);
                        }}>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default CarouselComp;