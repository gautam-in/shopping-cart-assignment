import React from 'react'
import Card from "./lib/card"
import Banner from "./lib/banner"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss"
import axios from "axios"

function Home({categories}) {

   const [banners,setBanners]=React.useState([]);
  
  
    
  
      React.useEffect(() => {
        
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'http://localhost:5000/banners', 
          headers: { }
        };
         
        axios(config)
        .then(function (response) {
        
          setBanners(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

      }, [])



    return (
       
        <div className="productContainer" >
            <div className="home" >
            <Carousel autoPlay>
                  {
                      banners.map((o)=><Banner o={o}/>)
                  }
            </Carousel> 
            <div >
                {
                    categories.map((c,i)=>{return (
                       
                          <Card c={c} i={i}/>
                        
                       
                        )})
                }
             </div>   
            </div>
        </div>
    )
}

export default Home
