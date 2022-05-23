import axios from 'axios'
import { useState, useEffect } from 'react'
import './Home.css'
import { useSearchParams } from 'react-router-dom'
import { createSearchParams, useNavigate } from 'react-router-dom';

const Home = () => {
    const [carouseldata, setCarouselData] = useState(null)
    const [searchParam, setSearchParam] = useSearchParams()
    const navigate = useNavigate()

    useEffect(()=>{
        const data = async () => {
           const bannerData = await axios.get('http://localhost:5000/banners').then(response => {
               return response.data
           })
           
            setCarouselData(bannerData)
        }
        data()
    },[])

    const [categorydata, setCategoryData] = useState(null)
    useEffect(()=>{
        const data = async () => {
           const categoryData = await axios.get('http://localhost:5000/categories').then(response => {
               return response.data
           })
           
           setCategoryData(categoryData)
        }
        data()
    },[])

    const handleNavigate = (id) => {
        navigate({
            pathname: 'products',
            search:createSearchParams({
                category:id
            }).toString()
        })
    }


    return (<>
        <section className="banner">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">

        {carouseldata && carouseldata.map((banner,index) => <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index} className={index == 0 ? 'active':''}></li> )}

        </ol>
        <div className="carousel-inner">
        {carouseldata && carouseldata.map((banner,index) => <div className={index ==0 ?'carousel-item active': 'carousel-item'} key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/>
            </div>)}

        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
        </section>
        <section className="category">
            <div className='container-fluid'>
            {categorydata && categorydata.map((category,index) => category.order > 0 ?  <div className="row align-items-center" key={category.id}>
               
                <div className= { (index+1)%2 !== 0 ?'col-lg-6 col-4' : index === 5 ? 'col-lg-6 col-4' : 'col-lg-6 col-4 order-last'}>
               
                    <img className='img-fluid' src={category.imageUrl} alt={category.name}/>
                </div>
                <div className='col-lg-6 col-8'>
                    <div className='category-details'>
                        <div className='details'>
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            <a   onClick={() => { handleNavigate(category.id) }} className='explore-btn btn btn-danger'>Explore {category.name}</a>
                        </div>
                    </div>
                </div>
                </div> : "")}
            </div>
        </section>
      
    </>);
}

export default Home