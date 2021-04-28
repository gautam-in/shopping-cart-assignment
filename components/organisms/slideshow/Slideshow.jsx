import { useEffect } from 'react'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux'
import BannerItem from './BannerItem';
import { fetchBanners } from '../../../redux/actions'

function Slideshow({banners, fetchBanners}) { 
    useEffect(() => {
      fetchBanners()
    }, [])

    if(!banners.length){
      return null;
    }

    return (
        <CarouselProvider
            infinite
            isPlaying
            naturalSlideWidth={90}
            naturalSlideHeight={7}
            totalSlides={banners.length}>        

            <Slider>
                { 
                    banners.map((bannerItem) => {
                        return (
                            <Slide key={bannerItem.id}>
                                <BannerItem bannerItem={bannerItem} />
                            </Slide>
                        )
                    }
                )}
            </Slider>
            
            <div style = {{ justifyContent : 'center', display : 'flex' }}> <DotGroup /> </div>

            
        </CarouselProvider>
    )
}

const mapStateToProps = (state) => {
  return { banners : state.banners}
}

export default connect(mapStateToProps, { fetchBanners })(Slideshow);


