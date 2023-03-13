import Carousel from "@/app/components/carousel/Carousel";
import Offers from "@/app/components/categories/Categories";
import React from "react";
import Layout from "../Layout";

function index() {
  return (
    <>
      <Layout
        childComponent={
          <>
            <Carousel /> <Offers />
          </>
        }
      />
    </>
  );
}

export default index;
