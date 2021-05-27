import React, { Component } from 'react'
import endpoints from '../../config/endpoints'

export default class Banner extends Component {

    state = {
        banners: [],
        currentIndex: 1
    }

    constructor(props) {
        super(props);
        this.goToNext = this.goToNext.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
    }

    componentDidMount() {
        fetch(endpoints.FETCH_BANNER)
            .then(res => res.json())
            .then(data => this.setState({
                banners: data
            }))
            .then(() => {
                this.moveBanner(1);
            })
            .catch(err => console.log('error while fetching banner : ', err))

        document.getElementById('banner-section-id').addEventListener('keydown', (e) => this.handleKeyEvent(e))
    }

    componentWillUnmount() {
        document.getElementById('banner-section-id').removeEventListener('keydown', (e) => this.handleKeyEvent(e))
    }

    handleKeyEvent(e) {
        if(e.target.id === "banner-section-id" || e.target.className === "banner") {
            if(e.key === 'ArrowRight' || e.key === 'Right') {
                this.goToNext();
            } else if(e.key === 'ArrowLeft' || e.key === 'Left') {
                this.goToPrev();
            }
        }
    }

    goToPrev() {
        if(this.state.currentIndex === 1) {
            this.moveBanner(this.state.banners.length);
        } else {
            this.moveBanner(this.state.currentIndex - 1);
        }
    }

    goToNext() {
        if(this.state.currentIndex === this.state.banners.length) {
            this.moveBanner(1);
        } else {
            this.moveBanner(this.state.currentIndex + 1);
        }
    }

    moveBanner(index) {
        let banner = document.getElementsByClassName('banner');
        let dot = document.getElementsByClassName('dot');

        this.setState({
            currentIndex: index
        }, () => {
            this.state.banners.forEach((element, i) => {
                banner[i].style.display = "none";
                dot[i].className = "dot"
            });

            banner[this.state.currentIndex - 1].style.display = "block";
            dot[this.state.currentIndex - 1].className += " active-dot"
        })

    }

    render() {
        return (
            <section className="banner-section" id = "banner-section-id" tabIndex = "0">
                {this.state.banners.length > 0 &&
                    this.state.banners.map(banner => (
                        <div className="banner" key={banner.id}>
                            <div className="prev" aria-label = "Go to previous slide" onClick={() => this.goToPrev()}></div>
                            <img src={endpoints.BASE_URL + banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                            <span className="next" aria-label = "Go to next slide" onClick={() => this.goToNext()}></span>
                        </div>
                    ))
                }
                {/* custom dots */}
                {this.state.banners.length > 0 &&
                    <section className="dot-section">
                        {this.state.banners.map((data, index) => (
                            <div className="dot" key={data.id} onClick={() => this.moveBanner(index + 1)}></div>
                        ))}
                    </section>
                }
            </section>
        )
    }
}
