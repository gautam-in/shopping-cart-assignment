import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Banner() {
    const [banners, setBanners] = useState([]);
    // const [bannerImgArray, setBannerImgArray] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/banners')
        .then(({data})=>{
            setBanners(data);
        })
        .catch((err) => {console.error(err)});

    },[]);

  return (
    <div>
      <Carousel>
          {banners.map((banner) => {
              return (<Carousel.Item key={banner.id}>
              <img
                className="d-block w-100"
                src={banner.bannerImageUrl}
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>)
          })}
        
      </Carousel>
    </div>
  );


//   return (
//     <div>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={require('../static/images/offers/offer1.jpg')}
//             alt="First slide"
//           />
//           {/* <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={offer2}
//             alt="Second slide"
//           />
//           {/* <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={offer3}
//             alt="Third slide"
//           />
//           {/* <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
}
