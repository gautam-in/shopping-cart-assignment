import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const SliderContainer = styled.div`
    margin-top:'2rem';

`;

export const SlickArrowStyle = styled.button`
        z-index: 200;
        background-color: black;
        width: 200px;
        color: black;

    &:before{
        color: black;
        z-index: 100;
        background-color: black;
        left: 0%;
    }
    & .slick-prev {
        z-index: 100;
        background-color: black;
        left: 0%;
    }
`;