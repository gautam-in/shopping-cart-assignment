import React from 'react';
import Categories from '../../Components/Categories/Categories.component';
// import Slideshow from '../../Components/Slideshow/Slideshow.component';
import Slideshow from '../../Components/Slideshow/Slideshow.component';

const Homepage = (props) => {
    return (
        <div>
            <Slideshow/>
            <Categories />
        </div>
    );
}

export default Homepage;