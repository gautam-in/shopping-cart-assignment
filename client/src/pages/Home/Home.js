import { useEffect,useState } from "react";
import { isEmpty } from "lodash";
import axios from 'axios';
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../containers/Categories/Categories";
import Layout from "../../layout/Layout";

function Home() {

  const [carouselData,setCarouselData] = useState([])
  const [categoriesData,setCategoriesData ] = useState([])

  useEffect (() => {
      const getCarouselData = async () => {
       let res = await axios.get('/banners')
        if(res.data){
          setCarouselData(res.data)
        }
      }
      getCarouselData()
  },[])

  useEffect (() => {
    const getCategoriesData = async () => {
     let res = await axios.get('/categories')
      if(res.data){
        setCategoriesData(res.data)
      }
    }
    getCategoriesData()
},[])
  return (
    <Layout>
      <div>
        { !isEmpty(carouselData) && <Carousel data={carouselData}/> }
        { !isEmpty(categoriesData) && <Categories data={categoriesData}/> }
      </div>
    </Layout>
  )
}

export default Home;