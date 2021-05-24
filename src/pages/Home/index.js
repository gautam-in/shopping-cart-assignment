import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOffers, getCategories } from "store/home/homeSlice";

import Header from "components/Header/Header";
import Banner from "components/Home/Banner";
import Copyright from "components/Shared/Copyright";
import Categories from "components/Home/Categories";
import { Container } from "./Home.styles";

const Home = () => {
  const dispatch = useDispatch();
  const { offers, categories } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getOffers());
    dispatch(getCategories());
  }, []);

  console.log({ offers, categories });
  return (
    <Container>
      <Header />
      <Banner data={offers} />
      <Categories data={categories} />
      <Copyright />
    </Container>
  );
};

export default memo(Home);
