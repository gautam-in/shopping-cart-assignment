import React from 'react';
import Banner from '../../components/Banner/Banner';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';

const home = ({categories}) => {
    return (
        <React.Fragment>
            <BannerCarousel/>
            <Banner/>
        </React.Fragment>
    )
}

export default home;