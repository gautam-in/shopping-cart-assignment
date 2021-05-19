import React from "react";
import Carousel from "../../components/UI/Carousel/Carousel";
import { connect } from "react-redux";
import Category from "../../components/UI/Category/Category";
import * as AuthenticateAPI from "../../axios/AuthenticationAPI";

function Home(props) {
  const [banners, setBanners] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/banners`)
      .then((res) => setBanners(res))
      .catch((err) => console.log(err));

    AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/categories`)
      .then((res) => setCategories(res))
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
