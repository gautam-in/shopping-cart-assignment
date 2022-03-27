import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import MainNavigation from "../../components/MainNavigation";

const Home = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Carousel />
        <Categories />
      </main>
    </div>
  );
};

export default Home;
