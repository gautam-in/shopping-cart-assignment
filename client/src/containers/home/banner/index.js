import React, { useEffect, useState } from 'react'
import { fetchBanners } from '../../../api/banner';

export default function Banner() {
    const [bannerList, setBannerList] = useState([]);
    const [current, setCurrent] = useState(0);
    const [banner, setBanner] = useState({})

    useEffect(() => {
        fetchBanners()
            .then(res => {
                setBanner(res.data[current])
                setBannerList(res.data);
            })
            .catch(error => {

            })
    }, [])


    useEffect(() => {
        setBanner(bannerList[current])
    }, [current]
    )

    const nextBanner = () => {
        current === bannerList.length - 1 ?
            setCurrent(0)
            :
            setCurrent(current + 1)
    }

    const prevBanner = () => {
        current === 0 ?
            setCurrent(bannerList.length - 1)
            :
            setCurrent(current - 1)
    }

    const dotPicksBanner = (e) => setCurrent(Number(e.target.id))

    if (bannerList.length > 0) {

        return (
            <section>
                <div className="BannerContainer">
                    <Slide banner={banner} />
                    <Arrows nextBanner={nextBanner}
                        prevBanner={prevBanner} />
                </div>
                <Dots dotQty={bannerList}
                    current={current}
                    dotPicksBanner={dotPicksBanner} />
            </section>
        )
    }
    else {
        return null;
    }
}

function Slide({ banner }) {
    return (
        <div className="BannerSlide">
            <img alt={banner.bannerImageAlt} src={banner.bannerImageUrl} />
        </div>
    )
}

function Arrows({ nextBanner, prevBanner }) {
    return (
        <>
            <a onClick={prevBanner} className="BannerSlidePrev" id="prev">&#10094;</a>
            <a onClick={nextBanner} className="BannerSlideNext" id="next">&#10095;</a>
        </>
    )
}

function Dots({ dotQty, current, dotPicksBanner }) {
    return (
        <div className="dot-container">
            {
                dotQty.map((dot, i) => {
                    return <span id={i} className={current === i ? "dot active" : "dot"}
                        onClick={dotPicksBanner}></span>
                })
            }
        </div>
    )
}
