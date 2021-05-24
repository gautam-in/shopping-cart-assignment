import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOffers } from "store/home/homeSlice";

import Header from "components/Header/Header";
import Banner from "components/Home/Banner";
import Copyright from "components/Shared/Copyright";
import { Container } from "./Home.styles";

const Home = () => {
  const dispatch = useDispatch();
  const { offers } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getOffers());
  }, []);

  console.log({ offers });
  return (
    <Container>
      <Header />
      <Banner data={offers} />
      <Copyright />
    </Container>
  );
};

export default memo(Home);
