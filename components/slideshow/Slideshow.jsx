import { useEffect } from 'react'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux'
import BannerItem from './BannerItem';
import { fetchBanners } from '../../redux/actions'

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


const bannersData = [
    {
      "bannerImageUrl": "/static/images/offers/offer1.jpg",
      "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
      "isActive": true,
      "order": 1,
      "id": "5b6c38156cb7d770b7010ccc"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer2.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
      "isActive": true,
      "order": 2,
      "id": "5b6c38336cb7d770b7010ccd"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer3.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
      "isActive": true,
      "order": 3,
      "id": "5b6c38456cb7d770b7010cce"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer4.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
      "isActive": true,
      "order": 4,
      "id": "5b6c38576cb7d770b7010ccf"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer5.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
      "isActive": true,
      "order": 5,
      "id": "5b6c386b6cb7d770b7010cd0"
    }
]
