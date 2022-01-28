import React from 'react';

import BannersSlider from '../../rows/banners-slider';
import Categories from '../../rows/categories';

import './home.scss';

const Home = () => {
    return <div>
        <div className='container-bottom-shadow'><BannersSlider /></div>
        <div><Categories /></div>
    </div>
}

export default Home;