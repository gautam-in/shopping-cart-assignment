import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
// import AliceCarousel from 'react-alice-carousel';
// import * as from "react-alice-carousel/lib/alice-carousel.css";

import './banner.css';


function Banner() {

    const [offers, setOffers] = useState([]);

    useEffect(async () => {
        const { data } = await axios('http://localhost:5000/banners');
        const images = data.map((d) => d.bannerImageUrl)
        setOffers(images);
    }, [])

    return (
        <div class="banner">
            <SimpleImageSlider
                width={896}
                height={226}
                images={offers}
                showBullets={true}
                showNavs={true}
                loop={true}
                autoPlay={true}
                autoPlayDelay={1.0}
                slideDuration={0.5}
            />
        </div>
    )

}

export default Banner;