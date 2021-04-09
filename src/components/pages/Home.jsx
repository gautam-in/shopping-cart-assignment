import React from "react";
import axios from "axios";
import SliderComponent from "./../SliderComponent";
import CategoryBanner from "./../CategoryBanner";
import "../Home.scss";

function Home() {
  const [banner, setBanner] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:5000/banners").then(
      (res) => {
        setBanner(res.data);
      },
      (err) => {
        console.error(err);
      }
    );
    axios.get("http://localhost:5000/categories").then(
      (res) => {
        setCategories(res.data);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);
  return (
    <div className="body-section">
      <SliderComponent banner={banner} />
      {categories.map(
        (item) =>
          item.enabled && <CategoryBanner category={item} key={item.key} />
      )}
    </div>
  );
}

export default Home;
