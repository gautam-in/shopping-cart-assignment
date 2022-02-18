// import React, {useState} from 'react';
// import Carousel from 'react-bootstrap/Carousel' 
// import BlueButton from 'react-bootstrap/CloseButton'; 

// // import offer1 from '../../resources/images/offers/offer1.jpg';
// // import offer2 from '../../resources/images/offers/offer2.jpg';
// // import offer3 from '../../resources/images/offers/offer3.jpg';
// // import offer4 from '../../resources/images/offers/offer4.jpg';
// // import offer5 from '../../resources/images/offers/offer5.jpg';

// import './Slides.scss';

// function Slides() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
//   return(
//     <div className="slides">
//       <Carousel id="offerSlide" activeIndex={index} onSelect={handleSelect} indicators={true}>
//         <ol className="carousel-indicators">
//           <li data-target='#offerSlide' data-slide-to="0" className="active"></li>
//           <li data-target= '#offerSlide' data-slide-to="1"></li>
//           <li data-target= '#offerSlide' data-slide-to="2"></li>
//           <li data-target= '#offerSlide' data-slide-to="3"></li>
//           <li data-target= '#offerSlide' data-slide-to="4"></li>
//         </ol>
//         <Carousel.Item style={{'height':'350px'}} interval={1000}>
//           <img className="d-block w-100" src={offer1} alt="Third slide" />
//         </Carousel.Item>
//         <Carousel.Item style={{'height':'350px'}} interval={1000}>
//           <img className="d-block w-100" src={offer2} alt="Third slide" />
//         </Carousel.Item>
//         <Carousel.Item style={{'height':'350px'}} interval={1000}>
//           <img className="d-block w-100" src={offer3} alt="Third slide" />
//         </Carousel.Item>
//         <Carousel.Item style={{'height':'350px'}}>
//           <img className="d-block w-100" src={offer4} alt="Third slide" />
//         </Carousel.Item>
//         <Carousel.Item style={{'height':'350px'}} interval={1000}>
//           <img className="d-block w-100" src={offer5} alt="Third slide" />
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   )
// }

// export default Slides;
