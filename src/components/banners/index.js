import { useContext, useEffect } from "react";

import { BannersContext } from '../../contexts/banners.context';

import './banners.scss';

const Banners = () => {
    const {banners} = useContext(BannersContext);
    console.log('Banners ::', banners);

    let slideIndex = 1;
    useEffect(()=> {
        showSlides(slideIndex);
    }, []);

    const plusSlides = (event, n) => {
        event.preventDefault();
        showSlides(slideIndex += n);
    }

    const currentSlide = (event, n) => {
        event.preventDefault();
        showSlides(slideIndex = n);
    }

    const showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(".carousel__slide");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }
    return (
        <div className="carousel__container">
            <div className="carousel__slides-container">
                <div className="carousel__slide fade">
                <div className="numbertext">1 / 3</div>
                    <img alt='alternate' src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ
                    "/>
                </div>
            
                <div className="carousel__slide fade">
                <div className="numbertext">2 / 3</div>
                <img alt='alternate' src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ
                "/>
                </div>
            
                <div className="carousel__slide fade">
                <div className="numbertext">3 / 3</div>
                <img alt='alternate' src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ
                " />
                </div>
            
                <a href="#" className="prev" onClick={(event) =>plusSlides(event,-1)}>❮</a>
                <a href='#' className="next" onClick={(event) =>plusSlides(event, 1)}>❯</a>
            
            </div>
            <div className="dot__container">
                <span className="dot" onClick={(event) =>currentSlide(event, 1)}></span> 
                <span className="dot" onClick={(event) =>currentSlide(event, 2)}></span> 
                <span className="dot" onClick={(event) =>currentSlide(event, 3)}></span> 
            </div>
        </div>
    );
}

export default Banners;