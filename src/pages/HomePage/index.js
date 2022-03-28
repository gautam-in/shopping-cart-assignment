import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import MainNavigation from "../../components/MainNavigation";

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Carousel />
        <Categories />
      </main>
    </>
  );
};

export default HomePage;
