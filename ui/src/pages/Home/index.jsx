import { Header, Carousel, HomePageCategories } from "../../container";

import categoryData from "./data.json";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <Carousel />
        <HomePageCategories categories={categoryData} />
      </div>
    </div>
  );
};

export default Home;
