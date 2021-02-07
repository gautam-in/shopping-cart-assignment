import React from 'react';
import Header from '../../components/common/Header'
import Carousel from './Carousel'
import Footer from '../../components/common/Footer';
import './Home.css';

const banners = require('../../server/banners/index.get.json')
const data = require('../../server/categories/index.get.json')

class Home extends React.Component {

    state = {
        currentImageIndex: 0
    };

    processCards = () => {
        const length = data.length - 1
        return data.map((val, index) => {
            return <Carousel
                key={val.id}
                cardContentH5={val.name}
                cardContentSubtitle={val.description}
                image={val.imageUrl}
                mediaPosition={val.order}
                buttonText={val.name}
                lastCard={length === index ? true : false} />
        })
    }
    processCarousel = () => {
        return (
            <div className="container">
                <div className="carousel">
                    {this.arrow("left", this.previousSlide, "PREV")}
                    {banners.map((banner) => {
                        return this.imageSlide(banner.bannerImageUrl)
                    })}
                    {this.arrow("right", this.nextSlide, "NEXT")}
                </div>
            </div>);
    }

    imageSlide = (url) => {
        console.log(url)
        const styles = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return (
            <div className="image-slide" style={styles}><img src={url} /></div>
        );
    }

    arrow = (direction, clickFunction, glyph) => {
        return (<div
            className={`slide-arrow ${direction}`}
            onClick={clickFunction}>
            { glyph}
        </div>)
    };

    previousSlide = () => {
        const lastIndex = banners.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide = () => {
        const lastIndex = banners.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div>
                <Header />
                {/* {this.processCarousel()} */}
                {this.processCards()}
                <Footer />
            </div>

        );
    }
}

export default Home;