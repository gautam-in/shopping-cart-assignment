import "./BannerComponent.scss";
import IBanners from "../../Interfaces/IBanners";
import { useState } from "react";
import classNames from "classnames";

interface IBannerComponentProps {
    bannerList: Array<IBanners>;
}

export const BannerComponent: React.FC<IBannerComponentProps> = (
    props: IBannerComponentProps
) => {
    const { bannerList } = props;
    const BASE_CLASSNAME: string = "banner";
    const CAROUSEL_CLASSNAME: string = `${BASE_CLASSNAME}_carousel`;
    const CAROUSEL_IMAGE_CLASSNAME: string = `${CAROUSEL_CLASSNAME}_image`;
    const PREV_BUTTON_CLASSNAME: string = `${BASE_CLASSNAME}_prev`;
    const NEXT_BUTTON_CLASSNAME: string = `${BASE_CLASSNAME}_next`;
    const DOT_BUTTON_CONTAINER_CLASSNAME: string = `${BASE_CLASSNAME}_dot-slider`;

    const [selectedBanner, setSelectedBanner] = useState<number>(0);

    enum btnType {
        PREV,
        NEXT,
    }

    const handleBannerChange = (type: btnType) => {
        let index = selectedBanner;
        if (type === btnType.PREV) {
            if (index > 0) {
                setSelectedBanner(--index);
            }
        }
        if (type === btnType.NEXT) {
            if (index < bannerList.length-1) {
                setSelectedBanner(++index);
            }
        }
    };

    const getSelectedClassName = (index: number) => {
        return classNames({
            "banner_dot": true,
            "banner_dot--selected": index === selectedBanner,
        });
    };

    return bannerList.length > 0 ? (
        <div className={BASE_CLASSNAME}>
            <div className={CAROUSEL_CLASSNAME}>
                <img
                    className={CAROUSEL_IMAGE_CLASSNAME}
                    src={bannerList[selectedBanner].bannerImageUrl}
                    alt={bannerList[selectedBanner].bannerImageAlt}
                />
            </div>
            <button
                className={PREV_BUTTON_CLASSNAME}
                onClick={() => handleBannerChange(btnType.PREV)}
            >
                PREV
            </button>
            <button
                className={NEXT_BUTTON_CLASSNAME}
                onClick={() => handleBannerChange(btnType.NEXT)}
            >
                NEXT
            </button>
            <div className={DOT_BUTTON_CONTAINER_CLASSNAME}>
                {bannerList.map((banner, index) => {
                    return (
                        <button
                            className={getSelectedClassName(index)}
                            onClick={() => setSelectedBanner(index)}
                        />
                    );
                })}
            </div>
        </div>
    ) : (
        <div>Something went wrong</div>
    );
};
