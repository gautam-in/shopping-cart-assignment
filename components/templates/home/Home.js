import React from "react";
import CategoryItem from "../../organism/Category/CategoryItem";
import Carousel from "../../organism/Carousel/Carousel";
import PageLayout from "../../organism/layout/PageLayout";

class Home extends React.Component {
render(){
//data from api and reducer
const {bannerData,unfilteredCategoryData} = this.props
const categoryData = unfilteredCategoryData.filter((data)=> data?.enabled)
    return(
        <PageLayout >
            <div className="empty" />
            <Carousel carouselData={bannerData} />
              {categoryData?.length && categoryData.map((categoryItem,index)=>{
                  return <CategoryItem key={categoryItem.id} categoryItem={categoryItem} index={index} />
                })}
        </PageLayout>
    )}  
}
export default Home;