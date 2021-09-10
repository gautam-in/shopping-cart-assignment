import { useEffect, useState } from "react";
import Carousel from "../../components/carousel/carousel";
import Category from "../../components/category/category";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import UserService from "../../sevices/user-service";
import './home.scss'
const Home = () => {
    const [offerBanners, setOfferBanner] = useState([])
    const [CategoryArray, setCategoryArray] = useState([])

    useEffect(() => {
        getAllCategory()
        getOffers()
    }, [])
    const getAllCategory = () => {
        new UserService().getAllCategories().then(data => {
            console.log("all data is ", data);
            setCategoryArray(data.data)
        }).catch(err => {
            console.log("err ", err);
        })
    }
    const getOffers = () => {
        new UserService().getAllOffers().then(data => {
            setOfferBanner(data.data)
        }).catch(err => {
            console.log("err ", err);
        })
    }
    return <div className='home d-flex flex-column h-100'>
        <Header />
        <div className='home-content'>
            <Carousel offerBanners={offerBanners}/>
            <Category allCategory={CategoryArray}/>

        </div>
        <Footer />
    </div>
}
export default Home;