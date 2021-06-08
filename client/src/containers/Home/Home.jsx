import React from "react";
import Carousel from "../../components/UI/Carousel/Carousel";
import { connect } from "react-redux";
import Category from "../../components/UI/Category/Category";
import * as AuthenticateAPI from "../../axios/AuthenticationAPI";

export function Home(props) {
  const [banners, setBanners] = React.useState([]);
  const { categories } = props;
  React.useEffect(() => {
    AuthenticateAPI.getData(`${process.env.REACT_APP_BASE_URL}/banners`)
      .then((res) => setBanners(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    banners.length > 0 && (
      <main data-test="component-home">
        <Carousel banners={banners} />
        <Category categories={categories} />
      </main>
    )
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, null)(Home);
