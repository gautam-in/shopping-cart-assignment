import React,{useEffect,useState} from 'react'
import axios from "axios"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default function Gallery() {
    const [baners, setBaners] = useState([])
    const apicall=async()=>{
        let res = await axios.get(`http://localhost:5000/banners`)
        setBaners(res.data)
        debugger
    }
    useEffect(()=>{
        apicall()
       
    },[])
    return (
        <div>
             { baners.length > 0 && <div><Carousel showThumbs={false}>
                {baners.map(ban => {
                    return <div><img src={require("../../../../static/images/offers/offer2.jpg").default} /></div>
                })}
            </Carousel></div>}
        </div>
    )
}
