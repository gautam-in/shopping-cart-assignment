import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOffers, getCategories } from "store/home/homeSlice";

import Banner from "components/Home/Banner";
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
      <Banner data={offers} />
      <Categories data={categories} />
    </Container>
  );
};

export default memo(Home);
