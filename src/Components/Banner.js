import { useState } from "react";
import '../Style/Banner.scss'

function Banner(props) {
    const [position, setPosition] = useState(0);
    const { bannerData } = props;
    const activeBannerData = bannerData.filter(ele => ele.isActive === true);
    const visibleBanner = activeBannerData[position];

    const handleBannerPosition = (direction) => {
        let newPositionVal;
        const lastPosition = activeBannerData.length - 1;
        if (direction === 'prev') {
            newPositionVal = position === 0 ? lastPosition : position - 1;
        } else if (direction === 'next') {
            newPositionVal = position === lastPosition ? 0 : position + 1;
        } else {
            newPositionVal = position;
        }
        setPosition(newPositionVal);
    };

    return (
        <div className="BannerWrapper">
            <button className="prevButton" onClick={() => handleBannerPosition('prev')}>PREV</button>
            <img src={visibleBanner?.bannerImageUrl} alt={visibleBanner?.bannerImageAlt} width="100%" />
            <button className="nextButton" onClick={() => handleBannerPosition('next')}>NEXT</button>
            <div className="dotCon">
                {activeBannerData.map((ele, index) => (
                    <span key={index} className='dot' style={{ backgroundColor: index === position ? "black" : "grey" }}></span>
                ))}
            </div>
        </div>
    )


}

export default Banner;
