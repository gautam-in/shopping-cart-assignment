import React from "react";
import CategoryItem from "../../molecules/CategoryItem";
import Banner from "../../organism/Banner";
import PageLayout from "../../organism/PageLayout";
import { connect } from 'react-redux';
import {
   fetchBanner,
} from '../../../redux_store/banner/actions';
import {
   fetchCategory
} from "../../../redux_store/category/actions"

// Redux State Configutration
const mapStateToProps = state => {
   return {
      bannerItems: state.banner.items,
      categoryData: state.category.items,
   }
}

// Redux Dispatch Configutration
const mapDispatchToProps = {
   fetchBanner: fetchBanner,
   fetchCategory: fetchCategory,
};

class HomePage extends React.Component {
   componentDidMount() {
      this.props.fetchBanner();
      this.props.fetchCategory();
   }

   render() {
      //data from api and reducer
      const { bannerItems, categoryData } = this.props
      const bannerItemsEnabled = bannerItems
         .filter((a) => a?.isActive)
         .sort((a, b) => a.order - b.order);
      
      const categoryDataEnabled = categoryData
         .filter((a) => a?.enabled)
         .sort((a, b) => a.order - b.order)
     
      return (
         <PageLayout>
            <Banner bannerItems={bannerItemsEnabled} />
            {
               categoryDataEnabled?.length && categoryDataEnabled.map((categoryItem, index) => {
                  return <CategoryItem key={categoryItem.key} item={categoryItem} index={index} />
               })
            }
         </PageLayout>
      )
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);