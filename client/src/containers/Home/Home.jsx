import React from "react";
import Carousel from "../../components/UI/Carousel/Carousel";
import { connect } from "react-redux";
import axios from "axios";
import Category from "../../components/UI/Category/Category";

function Home(props) {
  const [banners, setBanners] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5001/banners")
      .then((res) => setBanners(res.data))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5001/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    banners.length > 0 && (
      <div>
        <Carousel banners={banners} />
        <Category categories={categories} />
      </div>
    )
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, null)(Home);
