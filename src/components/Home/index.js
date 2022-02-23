import React, { useEffect, useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { getMethod, MediaURL } from '../../Utils/httpServices';
import { Endpoints } from '../../Utils/Endpoints';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import Footer from '../../common/Footer';
// import "./styles.css"

const animation = { duration: 12000, easing: (t) => t }

function Home() {
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [loaded, setLoaded] = useState(false);
    const [bannerList, setBannerList] = useState([]);
    const [catgList, setCatgList] = useState([]);

    // const [sliderRef, instanceRef] = useKeenSlider({
    //     loop: true,
    //     initial: 0,
    //     slideChanged(slider) {
    //         setCurrentSlide(slider.track.details.rel);
    //     },
    //     created() {
    //         setLoaded(true);
    //     }
    // });

    useEffect(() => {
        getMethod(Endpoints.bannerList).then((response) => {
            console.log(response)
            setBannerList(response)
        })
        getMethod(Endpoints.catgList).then((response) => {
            console.log(response)
            setCatgList(response)
        })
    }, [])

    return (
        <div>
            <Banner bannerList={bannerList} />
            <CategoryList catgList={catgList} />
            {/* <Footer /> */}
        </div>
    );
};

export default Home