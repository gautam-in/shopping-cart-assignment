import Slider from "react-slick";
import "../Scss/slider.scss";

function SliderComponent({sliderD}){
    const settings ={
        infinite: true,
        dots: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
    }

    return (
        <>
        <Slider {...settings}>
            {sliderD.map((data)=>(
                <div key={data.id}>
                    <img src={data.bannerImageUrl} alt={data.bannerImageUrl} />
                </div>
            ))  
            }
        </Slider>
        </>
    )
}

export default SliderComponent;