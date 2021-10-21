import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const CarauselWrapper = styled.div`
    max-width: 100%;
    margin: 10px auto;
  
    box-shadow: 0px 30px 20px -30px #a19f9f;
    & .carousel{
        display: none;
    }
    & .carousel-slider{
        display: block;
    }

    @media (max-width: 480px){
        max-width: 100%;
        min-height: 110px;
        .control-dots{
            margin: 0 auto;
        }
    }
    @media (min-width:481px) and (max-width: 768px) {
        max-width: 100%;
        min-height: 20vh;
    }
    
`;

export default function Carausel() {
    const banners = useSelector((state) => state.carausel.carauselItems);
    return (
        <CarauselWrapper data-testid='carausel'>
            <Carousel showStatus={false} infiniteLoop={true}>
                {
                    (banners || []).map(banner => {
                        return (
                            <img src={banner.bannerImageUrl} key={banner.id} alt='banner' />
                        )
                    })
                }
            </Carousel>
        </CarauselWrapper>
    )
}

