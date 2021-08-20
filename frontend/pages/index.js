import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Home from "../components/Home";
import { banner } from "../../server/banners/index.get";
import { categories } from "../../server/categories/index.get";

export default function HomePage() {
  console.log("banner", banner);
  return <Home banners={banner} categories={categories} />;
}
