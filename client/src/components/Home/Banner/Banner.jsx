import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import

    function Banner() {

        const [offers, setOffers] = useState([]);

        useEffect(() => {
            const { data } = axios('http://localhost:5000/banners');
            setOffers(data);
            console.log(data);
        })

        return (
            <div class="category banner">
                <img src="../static/images/offers/offer1.jpg" alt="" />
            </div>
        )

    }

export default Banner;