import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './banner.css';


function Banner() {

    const [offers, setOffers] = useState([]);
    const [index, setIndex] = useState(0);

    const slideRight = () => {
        setIndex((index + 1) % offers.length);
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(offers.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    useEffect(async () => {
        const { data } = await axios('http://localhost:5000/banners');
        const images = data.map((d) => d.bannerImageUrl)
        setOffers(images);
    }, [])

    return (
        offers.length > 0 && (
            <div className='banner'>
                <button className='slide-arrow' onClick={slideLeft}>{"PREV"}</button>
                <img src={offers[index]} alt={index} />
                <button className='slide-arrow' onClick={slideRight}>{"NEXT"}</button>
            </div>
        )
    );

}

export default Banner;