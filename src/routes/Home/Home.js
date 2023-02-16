import React from "react";
import { useSelector } from "react-redux";
import Caraousel from "../../components/Caraousel/Caraousel";
import Card from "../../components/Card/Card";

function Home({ }) {
    const offerArr = useSelector(state => state.offer.offers)
    const homeCards=useSelector(state => state.offer.homecards)
    return (
        <div className="bg-white py-2">
            <Caraousel imageArr={offerArr} />
            {homeCards.map((homeCard,i) => <Card cardObj={homeCard} key={ homeCard.key} i={i} />)}
        </div>
    )
};

export default Home;