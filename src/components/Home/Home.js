import OfferSlider from "../slider/OfferSlider";
import MainWrap from "../wrapper/Wrapper";
import Categories from "../categories/Categories";

const Home = () => {
  return (
    <MainWrap>
      <OfferSlider />
      <Categories />
    </MainWrap>
  );
};

export default Home;
