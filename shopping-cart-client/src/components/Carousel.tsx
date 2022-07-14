import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'

const banners = [
    {
      "bannerImageUrl": "/static/images/offers/offer1.jpg",
      "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
      "isActive": true,
      "order": 1,
      "id": "5b6c38156cb7d770b7010ccc"
    },
    // {
    //   "bannerImageUrl": "/static/images/offers/offer2.jpg",
    //   "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
    //   "isActive": true,
    //   "order": 2,
    //   "id": "5b6c38336cb7d770b7010ccd"
    // },
    // {
    //   "bannerImageUrl": "/static/images/offers/offer3.jpg",
    //   "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
    //   "isActive": true,
    //   "order": 3,
    //   "id": "5b6c38456cb7d770b7010cce"
    // },
    // {
    //   "bannerImageUrl": "/static/images/offers/offer4.jpg",
    //   "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
    //   "isActive": true,
    //   "order": 4,
    //   "id": "5b6c38576cb7d770b7010ccf"
    // },
    // {
    //   "bannerImageUrl": "/static/images/offers/offer5.jpg",
    //   "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
    //   "isActive": true,
    //   "order": 5,
    //   "id": "5b6c386b6cb7d770b7010cd0"
    // }
  ]

const AddCarousel = () => {

    return (
          <div className='px-md-5 px-1'>
            <Carousel interval={3000} className='mx-lg-5 my-1 mx-sm-0 px-md-5 effect1'>
          {
              banners.map((banner)=>{
                  return (<Carousel.Item key={banner.id} className='px-md-5' >
                      <img
                        className="d-block p-md-2 py-2"
                        src={banner.bannerImageUrl}
                        alt="bannerImageAlt"
                        style={{width:'inherit'}}
                      />
                    </Carousel.Item>)
              })
          }    
      </Carousel>
      </div>
    );
  }
export default AddCarousel