import { useState } from "react";
import { useEffect } from "react";
import GetHero from "./GetHero";
import HeroItem from "./heroItem";
import "./HeroCarousel.scss";
function HeroCarousel() {
    const [hero, setHero] = useState([]);
    useEffect(() => {
        async function FetchHero() {
            let response = await GetHero();
            setHero(response.data);
        }
        FetchHero();
    }, []);
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-touch="true">
                <ol className="carousel-indicators">
                    {
                        hero.map((element) => <li data-target="#carouselExampleIndicators" key={element.id} data-slide-to={element.order - 1} className={`${element.order == 1 ? "active" : ""}`}></li>)
                    }
                </ol>
                <div className="carousel-inner">
                    {
                        hero.map((element) => <HeroItem key={element.id} list={element} />)
                    }

                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">PREV</span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">NEXT</span>
                    <span className="sr-only">Next</span>
                </a>
            </div></>
    )
}
export default HeroCarousel;