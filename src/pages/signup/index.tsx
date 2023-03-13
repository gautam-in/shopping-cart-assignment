import Signup from "@/app/components/login/Signup";
import React from "react";
import Layout from "../Layout";

function index() {
  return (
    <>
      <Layout childComponent={<Signup />} />
    </>
  );
}

export default index;
