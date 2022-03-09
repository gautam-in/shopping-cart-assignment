import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './Home.module.css'

import Banners from '../../components/banners/Banners'
import CategoryCard from '../../components/categoryCard/CategoryCard'

const Home = ()=>{

    const [banners, setBanners] = useState([])

    useEffect(()=>{
        axios
        .get("http://localhost:4000/banners")
        .then((response)=>{
            setBanners(response.data)
        })
        .catch((error)=>{
            console.log(error)
            
        })
    },[])
    
    

    return (
        <>
            <main className={classes.home__container}>
                <Banners banners={banners}/>
                <CategoryCard />
            </main>

        </>
    )
}


export default Home;
