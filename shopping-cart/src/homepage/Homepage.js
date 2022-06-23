import { Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./homepage.css";
import { useEffect } from "react";
import axios from "axios";
import { API_URL, getUrl } from "../endpoints/endpoints";
import Categories from "../categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { setBannerData, setCategories } from "../redux/actions";

const Homepage = () => {
  const bannerData = useSelector((state) => state.bannerData);
  const categoriesData = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(getUrl(API_URL.getBanners)).then((res) => {
      dispatch(setBannerData(res.data));
    });
    axios.get(getUrl(API_URL.getCategories)).then((res) => {
      dispatch(setCategories(res.data));
    });
  }, [dispatch]);

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={12} sx={{ boxShadow: "0 10px 5px -9px gray" }}>
          {bannerData && (
            <Carousel showThumbs={false} infiniteLoop={true}>
              {bannerData.map((item) => (
                <div key={item.id}>
                  <img src={item.bannerImageUrl} alt="banner.jpg" />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
              ))}
            </Carousel>
          )}
        </Grid>
        <Grid item sm={12}>
          <Categories categoriesData={categoriesData} />
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
