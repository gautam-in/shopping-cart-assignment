import React, { useState } from 'react';
import classes from '../css/carousal.css';
import '../css/carousal.css';

const Carousal = ({ offerBanners }) => {

    const [currentBannerOrder, setCurrentBanner] = useState(1);

    const nextBanner = () => {
        let newOrder = currentBannerOrder+1;
        if(newOrder > offerBanners.length) return
        else setCurrentBanner(newOrder) 
    }

    const prevBanner = () => {
        let newOrder = currentBannerOrder-1;
        if(newOrder < 1) return
        else setCurrentBanner(newOrder)
    }

    return (
        <section className={classes['carousal-container']}>
            <div className={classes['slideshow-container']}>
                <img src={offerBanners[currentBannerOrder-1].bannerImageUrl} id={offerBanners[currentBannerOrder-1].id} />
                <button className={classes.prev} onClick={() => prevBanner()}>PREV</button>
                <button className={classes.next} onClick={() => nextBanner()}>NEXT</button>
            </div>
            <div className={classes['dots-div']}>
                {offerBanners.map(offer => {
                    return (<span className={offer.order === currentBannerOrder ? `${classes.dot} ${classes.active}` : classes.dot} key={offer.order} onClick={() => setCurrentBanner(offer.order)}></span>)
                })}
            </div>
        </section>
    )
}

export default Carousal;