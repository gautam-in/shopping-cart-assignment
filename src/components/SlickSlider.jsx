import React from "react";
import Slider from "react-slick";
import "../styles/slick.scss";
import "../styles/slick-theme.scss";
import BannerLoaderImage from "../images/banner_loader.jpg"

export default class SlickSlider extends React.Component{
    state = {
        loading: true,
        banners: null
    };
    
    async componentDidMount(){
        const url = "http://localhost:8081/banners/";

        let responseJSON = localStorage.getItem(url);
        if(!responseJSON){
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                cache: 'no-cache' // *default, no-cache, reload, force-cache, only-if-cached
              });
            
            responseJSON = await response.json();

            localStorage.setItem(url, JSON.stringify(responseJSON));
        }else{
            responseJSON = JSON.parse(responseJSON);
        }

        responseJSON = (responseJSON).sort(function(a, b){
            return a.order - b.order;
        }).filter(a => a.isActive == true);
        
        this.setState({loading: false, banners: responseJSON});
        //console.log(responseJSON);
    }

    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: true,
            className: "slides"
        }

        if (this.state.loading) {
            return (
                <>
                  <section className="slider_sec">
                      <div className="slider_container">
                          <div className="vertical-center-4 slider">
                                <div>
                                    <img src={BannerLoaderImage} />
                                </div>
                          </div>
                      </div>
                  </section>
                </>
            );
        }
      
        if (!this.state.banners) {
        return <div></div>;
        }


        return (
          <>
            <section className="slider_sec">
                <div className="slider_container">
                    <div className="vertical-center-4 slider">
                        <Slider {...settings} >
                            {
                                this.state.banners.map((banner)=>{
                                    return(
                                        <div key={banner.id}>
                                            <img src={'http://localhost:8081'+banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
          </>
        );
      }
}