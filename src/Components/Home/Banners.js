import "./Home.css"
import { useEffect, useState } from 'react';
import { useDispatch,useSelector} from "react-redux";
import { fetchBanners } from '../../Redux/Reducers/HomeData';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Banners =()=>{
    const dispatch = useDispatch();
    const data =useSelector((state) => state.home.value);   

  
    useEffect(() => {
      dispatch(fetchBanners());
      return
    }, []);
    

    return(
        <>
        <div style={{ boxShadow: "0 20px 30px -30px rgba(0, 0, 0, 0.7)",marginTop:"18px"}}>
        <Carousel autoPlay={true} interval={1500} infiniteLoop={true}  showThumbs={false}  showStatus={false}>
        {data.map((banner, index) => (
          <div key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
        </Carousel>
      </div>
        </>
    )
}

export default Banners;