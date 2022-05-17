import { useEffect, useState } from "react";
import CarouselCard from "../carouselCard/carouselCard";
import Category from "../category/category";
import axios from "axios";

const Home = (props) => {
       const [banner, setBanner] = useState([]);

       useEffect(() => {
              // Api to fetch banner details.
              const fetchBanners = async () => {
                     var response = await axios.get("http://localhost:5000/banners");
                     var bannerData = await response.data;
                     setBanner(bannerData);
              };

              fetchBanners();
       }, []);

       return (<>
                     <CarouselCard bannerData={banner} />
                     <Category categoryData={props.category} />
              </>
       )
}

export default (Home);