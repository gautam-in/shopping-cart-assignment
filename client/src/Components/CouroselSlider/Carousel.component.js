import React, { useEffect, useState } from 'react'
import  {Carousel} from 'react-responsive-carousel';
import axios from 'axios'

import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselComponent() {
    const [imageData, setImageData] = useState(null)
    const getbanners = () => {
        axios.get("http://localhost:5000/banners")
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error('Something went wrong in products')
                }
                setImageData(res.data)
            
            }).catch(error => {
                console.log(error);
            })

    }
    useEffect(() => {
        getbanners();
    }, [])
   
    return (
        <div>
            <Carousel showThumbs={false}>
        {imageData && imageData.map(item => (
          <div key={item.id} style={{ boxShadow: "0px -12px 28px -28px rgb(0 0 0 / 30%)", marginBottom: '4px' }}>
            <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
        </div>
    )
}
