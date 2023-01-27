import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Carausel2 from "../../layout/Carausel2";
import { fetchBannerData } from "./bannerSlice";

function Banner() {
  const { isLoading, error, data } = useSelector(
    (state) => state.banner.banner
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBannerData());
  }, []);

  return (
    <>
      <section className="carausel2">
        <Carausel2 data={data} />
      </section>
    </>
  );
}

export default Banner;
