import React, {useEffect} from "react";
import Image from "next/image";
import styles from "./Banners.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export const Banners = (props) => {
    useEffect(() => {
        typeof document !== undefined ? require('antd/dist/antd.css') : null
    }, [])
    return (
        <div>
            <Carousel className={styles["carousel-container"]} autoplay={true} style={{width: "80vw",}}
                      showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
                {props.bannerData.map((bannerItem, index) =>
                    (<div key={index}>
                        <img src={bannerItem.temp_url} alt={bannerItem.bannerImageAlt}
                             style={{height: "30vh", width: "80vw"}} key={index}/>
                    </div>)
                )}
            </Carousel>
        </div>
    )
}