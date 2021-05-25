
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import styles from '../styles/imageSlider.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageSlider = ({ banners }) => {

    // const [banners, setBanners] = useState([]);

    // useEffect(async () => {
    //     const res = await axios.get('http://localhost:5000/banners');
    //     const data = res.data;
    //     const banners_arr = data.map(banner => (
    //         <div key={banner.id}>
    //             <img src={banner.bannerImageUrl} />
    //         </div>

    //     ));
    //     setBanners(banners_arr);
    // }, []);

    return (
        <div className={styles.imgContainer}>
            <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} showStatus={false} >
                {
                    banners.map(banner => (
                        <div key={banner.id}>
                            <img src={banner.bannerImageUrl} />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}


export default ImageSlider
