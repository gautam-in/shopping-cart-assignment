import React from "react";
import CategoryItem from "./CategoryItem";
import Carousel from "./Carousel";
import PageLayout from "./PageLayout";
import homeStyles  from '../styles/home.module.scss'

class Home extends React.Component {
render(){
const {bannerData,unfilteredCategoryData,cartData,currentLogedInUser,isCartOpen} = this.props
const categoryData = unfilteredCategoryData.filter((data)=> data?.enabled)
    return(
        <PageLayout >
            <div style={{height:150}} />
            <Carousel carouselData={bannerData} styles={homeStyles} />
              {categoryData?.length && categoryData.map((categoryItem,index)=>{
                  return <CategoryItem styles={homeStyles} key={categoryItem.id} categoryItem={categoryItem} index={index} />
                })}
        </PageLayout>
    )}  
}
export default Home;