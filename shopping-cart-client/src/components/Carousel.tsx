import React, {useEffect, useState} from 'react'
import { Carousel } from 'react-bootstrap'
import axios from 'axios'
import { walkUpBindingElementsAndPatterns } from 'typescript'

export interface Banner {
      bannerImageUrl: string,
      bannerImageAlt: string,
      isActive: boolean,
      order: number,
      id: string
    }

const AddCarousel = () => {

    const [banners, setBanners] = useState<Banner[]>([])

    const getCarousel = () =>{
      axios.get('http://localhost:5000/banners')
      .then(res=>{
        setBanners(res.data)
      })
    }

    useEffect(()=>{
      getCarousel()
    }, [])

    return (
      <>
      {banners.length&&<div className='px-md-5 px-1'>
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
      </div>}
      </>
    );
  }
export default AddCarousel