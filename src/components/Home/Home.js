import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/api";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Banner from "./Banner/Banner";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Categories from "./Categories/Categories";
import "./Home.css";

function Home() {
  const [banner, setBanner] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const apiData = async () => {
      const bannerData = await fetchData("banners");
      setBanner(bannerData.data);
      const categoriesData = await fetchData("categories");
      setCategories(categoriesData.data);
    };
    apiData();
  }, []);
  const [authData, setAuthData] = useState();
  useEffect(() => {
    const auth = sessionStorage.getItem("Auth");
    setAuthData(auth);
  });

  return (
    <>
      <Paper
        sx={{
          p: 0.5,
          margin: "auto",
          maxWidth: "100%",
          flexGrow: 1,
          backgroundColor: "#fff",
        }}
      >
        <Carousel
          className="carousel"
          NextIcon={<NavigateNextIcon />}
          PrevIcon={<NavigateBeforeIcon />}
        >
          {banner &&
            banner.map((item, i) => <Banner img={item.bannerImageUrl} />)}
        </Carousel>
        <Grid container xs={12} className="categoryGrid">
          {categories &&
            categories
              .sort((a, b) => (a.order > b.order ? 1 : -1))
              .map((item) => (
                <Grid item xs={12} marginTop={4}>
                  <Categories
                    img={item.imageUrl}
                    name={item.name}
                    description={item.description}
                    order={item.order}
                    id={item.id}
                  />
                </Grid>
              ))}
        </Grid>
        <Grid item xs={12} marginTop={4}></Grid>
      </Paper>
    </>
  );
}

export default Home;
