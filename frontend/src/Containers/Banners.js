import React,{useState,useEffect} from "react";
import axios from "axios";
import {Carousel} from 'react-bootstrap';
import Item from "../Components/Item";

const Banners = () => {

    const [offers,setOffers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/banners')
            .then((banners)=>{
                setOffers(banners.data);
            })
    },[]);

    return(
        <Carousel variant="dark">
            {offers.map((offer)=>{
               return <Carousel.Item key={offer.id}><Item imagesrc={offer.bannerImageUrl} imagetext={offer.bannerImageAlt} carousel={true}/></Carousel.Item>
            })}
        </Carousel>
    )
};

export default Banners;