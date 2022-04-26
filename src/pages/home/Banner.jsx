import { Component } from "react";
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { carouselBtnStyles, indicatorStyles } from '../../utils/constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const bannerImages = require.context('../../static/images/offers', true);

class Banner extends Component {
    render() {
        const { banners } = this.props;

        return (
            <Carousel
                className="mt-3"
                autoPlay
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button style={{ ...carouselBtnStyles, left: 15 }} type="button" onClick={onClickHandler} title={label}>
                            PREV
                        </button>
                    )}
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button style={{ ...carouselBtnStyles, right: 15 }} type="button" onClick={onClickHandler} title={label}>
                            NEXT
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: '#000' }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                {banners.map(({ id, bannerImageUrl, bannerImageAlt }) => {
                    const image = bannerImages(`.${bannerImageUrl.split('/offers')[1]}`);

                    return (
                        <section key={id}>
                            <img src={image} alt={bannerImageAlt} />
                        </section>
                    )
                })}
            </Carousel>
        );
    };
};

const mapStateToProps = ({ banners }) => ({
    banners
});
export default connect(mapStateToProps)(Banner);