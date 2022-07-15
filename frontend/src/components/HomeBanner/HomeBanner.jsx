import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselHistory from '../CarouselHistory/CarouselHistory';
import './HomeBanner.scss'

const HomeBanner = () => {

    let [current, setCurrentIndex] = useState(0);
    let [items, setItems] = useState([]);


    useEffect(() => {
        getBanners()
    }, [])

    const getBanners = async () => {
        let { data: { status, data } } = await axios.get('/api/category/banners');
        if (status) {
            setItems([...data])
        }
    }

    const handlerPrev = () => {
        let index = current,
            length = items.length;

        if (index < 1) {
            index = length;
        }

        index = index - 1;
        setCurrentIndex(index)
    }

    const handlerNext = () => {
        let index = current,
            length = items.length - 1;

        if (index === length) {
            index = -1;
        }

        index = index + 1;
        setCurrentIndex(index)
    }

    const goToHistoryClick = (curIndex, index) => {
        let next = (curIndex < index);
        setCurrentIndex(index)
    }

    const getSource = (keyName) => {

        return items[current][keyName]
    }

    return (
        <>
            {items.length &&
                <div className="carousel">
                    <div className="carousel_slide" key={current}>
                        <img src={"assets/" + getSource("bannerImageUrl")} alt={getSource("bannerImageAlt")} aria-label={getSource("bannerImageAlt")} />
                    </div>
                    <button aria-label={"Previous"} className="carousel_control carousel_control__prev" onClick={handlerPrev}><span>Prev</span></button>
                    <button aria-label={"Next"} className="carousel_control carousel_control__next" onClick={handlerNext}><span>Next</span></button>
                    <div className="carousel_history">
                        <CarouselHistory
                            current={current}
                            items={items}
                            changeSilde={goToHistoryClick}
                        />
                    </div>
                </div>
            }

        </>
    )

}

export default HomeBanner;