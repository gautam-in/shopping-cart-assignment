import {useEffect, useRef, useState} from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import AlternateSections from '../../Components/AlternateSections';
import '../../CSS/homepage.css';
import '../../CSS/mobile.css';
import {getBannerData, getCategoryData} from '../../ApiRequestData/getAllApiData';
import Slider from "react-slick";
import CartView from '../MiniCart/index'



const NextArrow = ({ className, style, onClick }) => {
  return (<div title="next" onClick={onClick} style={{ ...style, display: "block", background: "#B6B6B6",padding: "4px", borderRadius: '3px' }} className={className}>Next</div>)
}

const PrevArrow = ({ className, style, onClick }) => {
  return (<div title="previous" onClick={onClick} style={{ ...style, display: "block", background: "#B6B6B6", padding: "4px", borderRadius: '3px' }} className={className}>Prev</div>)
}


const HomePage = () => {
  const runUseEffectOnce = useRef(false)
  const [bannerData,setBannerData] = useState([])
  const [categoryData,setCategoryData] = useState([])
  const [itemsInCart, setCartItems] = useState([])
  const [viewCart, setViewCart] = useState(false)
  const settings = {
        dots: true,
        arrows: true,
        accessibility: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1800,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        swipe: true,
        swipeToSlide: true
      };

useEffect(() => {
  if(!runUseEffectOnce.current){
      fetchBannerData()
      fetchCategoryData()
      retrieveCartData()
      runUseEffectOnce.current = true
  }
},[])

const fetchBannerData = async () => {
    let data = await getBannerData()
    setBannerData(data)
}

const fetchCategoryData = async () => {
  let data = await getCategoryData()
  let filteredData = data.filter(a => a.order > 0)
  filteredData = filteredData.sort((a,b) => {return a.order - b.order})
  setCategoryData(filteredData)
}

const retrieveCartData = () => {
  setCartItems(JSON.parse(localStorage.getItem("cartData")))
}

const showCart = () =>{
  !!viewCart ? setViewCart(false) : setViewCart(true)
}

const closeBtn = () => { setViewCart(false)}

  return (
    <div>
        {!!viewCart && <CartView closeBtn={closeBtn} updateCartPage={retrieveCartData}/>}
        <Header itemsInCart={!!itemsInCart && itemsInCart.length > 0 ? itemsInCart.length : 0} showCart={showCart}/>

        <div className='banner-section'>
          {
            !!bannerData.length &&
            <Slider {...settings} >
              {!!bannerData.length && bannerData.map((item,index)=>{
                return(
                    <img loading="lazy" key={index} id={item.id} src={item.bannerImageUrl} alt={item.bannerImageAlt} />
                )
              })}
            </Slider>
          }
        </div>

        <div className='sections flex-c justify-center align-center'>


              {!!categoryData.length && categoryData.map((item, index) => {
                return(
                  <AlternateSections
                    key={item.id}
                    uniqueId={item.id}
                    geometry={ index % 2 === 0 ? 'right' : 'left'}
                    imgUrl={item.imageUrl}
                    heading={item.name}
                    desc={item.description}
                    btnText={item.key}
                   />
                )
              })}

        </div>

        <Footer/>
    </div>
  )
}

export default(HomePage)
