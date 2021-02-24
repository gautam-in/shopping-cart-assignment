import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';

class Carousels extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Carousel>
                    {
                        this.props.banners.map(banner => {
                            return <div>
                                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                            </div>
                        })
                    }
                </Carousel>
                <div style={{
                    backgroundImage: "radial-gradient(at 48% 0, #9e9898 0%, #9e9898 0%, transparent 70%)",
                    margin: 'auto',
                    textAlign: 'center',
                    height: '8px',
                    width: '100%',
                }}></div>
            </>
        );
    }
}

export default Carousels;