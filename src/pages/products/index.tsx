import Navbar from "@/app/components/layout/Navbar";
import Products from "@/app/components/product/Products";
import React from "react";
import Layout from "../Layout";

function index() {
  return (
    <>
      <Layout
        childComponent={
          <section className="flex">
            <Navbar />
            <Products />
          </section>
        }
      />
    </>
  );
}

export default index;
