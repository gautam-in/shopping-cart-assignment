import React from "react";
import { useSelector } from "react-redux";
import Caraousel from "../../components/Caraousel/Caraousel";
import Card from "../../components/Card/Card";

function Home({}) {
  const offerArr = useSelector((state) => state.offer.offers);
  const categories = useSelector((state) => state.products.categories);
  return (
    <div className="bg-white py-2">
      <Caraousel imageArr={offerArr} />
      {categories.map((category, i) => (
        <Card cardObj={category} key={category.key} i={i} />
      ))}
    </div>
  );
}

export default Home;
