import React, { useEffect,  useState  }  from 'react';
import useImageLoad from '../../Hooks/useImageLoad';
import Carousel from '../utils/carousel/Carousel';


function Home(props) {
    const [ImgUrl, setImage]= useState();
    const [error, image]= useImageLoad(ImgUrl);
    useEffect(()=>{
        fetch("/banners").then((dta)=> dta.json()).then((dta)=>{
            let data = [];
            dta.forEach(element => {
                data.push(element.bannerImageUrl);
                
            });
            setImage(data);
        })
    },[])
    return(
        <div>
            {!error && <Carousel image={image}/>}
        </div>
    )
}

export default Home;