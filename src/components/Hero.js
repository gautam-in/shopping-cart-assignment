import React,{ useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import offer1 from '../images/offers/offer1.jpg';
import offer2 from '../images/offers/offer2.jpg';
import offer3 from '../images/offers/offer3.jpg';
import offer4 from '../images/offers/offer4.jpg';
import offer5 from '../images/offers/offer5.jpg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import AppImage  from './AppImage'

const forwardArrowAnimation = keyframes`
0%{
  left: 50%;
}
100%{
  left: 90%;
}
`;
const backwardArrowAnimation = keyframes`
0%{
  left: 50%;
}
100%{
  left: 5%;
}
`;

const StyledCarouselContainer = styled.div`
width:90%;
height 80vh;
margin 20px auto;
display:flex;
justify-content: center;
align-items: center;
position: relative;
`;

const StyledArrowContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-size: 35px;
width:50px;
height:50px;
border-radius: 50%;
left:${props=>props.leftPosition};
position: absolute;
z-index: 1;
${props => props.arrowDir === 'forward' ? 
css`
animation: ${forwardArrowAnimation} 1s ease;
right:0%;
`: css`
animation: ${backwardArrowAnimation} 1s ease;
left:5%;
` }
cursor: pointer;
:hover{
  background-color: #d9d9d9
}
`;

const StyledIndicatorContainer = styled.div`
width: 200px;
margin: 0 auto;
display: flex;
`;

const StyledIndicator = styled.div`
width:10px;
height:10px;
margin: 5px;
border-radius: 5px;
background-color:#d9d9d9;
background-color:${props=>props.bgColor};
`;

const offers = [offer1, offer2, offer3, offer4, offer5];
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('forward');
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex + 1);
    setDirection('forward');
  }
  const prevImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex -1);
    setDirection('backward');
  }
  return(
    <>
    <StyledCarouselContainer>
    {currentImageIndex !==0 && <StyledArrowContainer onClick={prevImage} leftPosition="10%" arrowDir='backward'> 
    <MdKeyboardArrowLeft />
    </StyledArrowContainer>}
 <AppImage src={offers[currentImageIndex]} imageDir={direction}/>
    {currentImageIndex !== offers.length - 1 && <StyledArrowContainer onClick={nextImage} leftPosition="90%" arrowDir='forward'>
    <MdKeyboardArrowRight />
    </StyledArrowContainer>}
    </StyledCarouselContainer>
    <StyledIndicatorContainer>
    {offers.map((off, index) => (
      <StyledIndicator key={off} bgColor={index === currentImageIndex ? '#1aff1a' : ''} />
    ))}
    </StyledIndicatorContainer>
    </>
  )
}

// const Hero = () => {
//   return (

//     <Wrapper className='section-center'>
//       <article className='content'>
//       <Carousel breakPoints={breakPoints}>
//       <Item><img src={offer1} alt="offer1"/></Item>
//       <Item><img src={offer2} alt="offer2"/></Item>
//       <Item><img src={offer3} alt="offer3"/></Item>
//       <Item><img src={offer4} alt="offer4"/></Item>
//       <Item><img src={offer5} alt="offer5"/></Item>
//     </Carousel>

//       </article>
      
//     </Wrapper>
//   )
// }


// const Item = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   background-color: #00008B;
//   margin: 0 15px;
// `;

// const Wrapper = styled.section`
//   min-height: 60vh;
//   display: grid;
//   place-items: center;
//   .img-container {
//     display: none;
//   }

//   p {
//     line-height: 2;
//     max-width: 45em;
//     margin-bottom: 2rem;
//     color: var(--clr-grey-5);
//     font-size: 1rem;
//   }
//   @media (min-width: 992px) {
//     height: calc(100vh - 5rem);
//     grid-template-columns: 1fr 1fr;
//     gap: 8rem;
//     h1 {
//       margin-bottom: 2rem;
//     }
//     p {
//       font-size: 1.25rem;
//     }
//     .hero-btn {
//       padding: 0.75rem 1.5rem;
//       font-size: 1rem;
//     }
//     .img-container {
//       display: block;
//       position: relative;
//     }
//     .main-img {
//       width: 100%;
//       height: 550px;
//       position: relative;
//       border-radius: var(--radius);
//       display: block;
//       object-fit: cover;
//     }
//     .accent-img {
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 250px;
//       transform: translateX(-50%);
//       border-radius: var(--radius);
//     }
//     .img-container::before {
//       content: '';
//       position: absolute;
//       width: 10%;
//       height: 80%;
//       background: var(--clr-primary-9);
//       bottom: 0%;
//       left: -8%;
//       border-radius: var(--radius);
//     }
//   }
// `

export default Hero

/*
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        <img src={heroBcg2} alt='person working' className='accent-img' />
*/