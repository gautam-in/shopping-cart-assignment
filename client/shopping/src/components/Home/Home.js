import React, { useEffect,  useState  }  from 'react';
import useImageLoad from '../../Hooks/useImageLoad';
import Carousel from '../utils/carousel/Carousel';
import CategoryCard from './CategoryCards/CategoryCard';


function Home(props) {
    const [ImgUrl, setImage]= useState();
    const [category, setCategory]= useState({category:[], categoryImage:[]});
    const [error, image]= useImageLoad(ImgUrl);
    useEffect(()=>{
        fetch("/banners").then((dta)=> dta.json()).then((dta)=>{
            let data = [];
            dta.forEach(element => {
                data.push(element.bannerImageUrl);
                
            });
            setImage(data);
        })
        fetch("/categories").then((dta)=> dta.json()).then((dta)=>{
            let data = [];
            dta.forEach(element => {
                data.push(element.imageUrl);
                
            });
            setCategory({category:dta,categoryImage:data});
        })
    },[])
    return(
        <div className="container">
            <div className="row center" style={{marginBottom:"1em"}}>
            {!error && <Carousel image={image}/>}
            </div>
            {/* {(!errorCat && Catimage!==null) && Catimage.map(item=><img src={item} alt=""></img>)} */}
            <div className="row">
            {category.category.map((cat)=>{
                return cat.imageUrl && <CategoryCard {...cat}/>
                })
             }
        </div>
        </div>
    )
}

export default Home;