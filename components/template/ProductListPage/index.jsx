import React from "react";
import CategoryItem from "../../molecules/CategoryItem";
// import Banner from "../../organism/Banner";
import PageLayout from "../../organism/PageLayout";
import { connect } from 'react-redux';
import {
    fetchProduct
} from '../../../redux_store/product/actions';
import ProductList from "../../organism/ProductList";
import ProductListMenu from "../../organism/ProductListMenu";
import {Row,Col} from 'reactstrap';
import {
   fetchCategory, selecteCategory
} from "../../../redux_store/category/actions";

// Redux State Configutration
const mapStateToProps = state => {
   return {
    productItems: state.product.items,
    categoryData: state.category.items,
    selectedCategoryId: state.category.selectedId,
   }
}

// Redux Dispatch Configutration
const mapDispatchToProps = {
   fetchProduct: fetchProduct,
   fetchCategory: fetchCategory,
};

class ProductListPage extends React.Component {
   componentDidMount() {
      this.props.fetchProduct();
      this.props.fetchCategory();
   }
   render() {
      //data from api and reducer

      const { productItems,categoryData,selectedCategoryId} = this.props
      const productItemsEnabled = productItems
         .filter((a) => {
            if(selectedCategoryId === null){
               return true
            }else if(a.category == selectedCategoryId){
               return true
            }else{
               return false
            }
         })
      
      const categoryDataEnabled = categoryData
         .filter((a) => a?.enabled)
         .sort((a, b) => a.order - b.order)
      return (
         <PageLayout>
            {/* <Banner bannerItems={bannerItemsEnabled} /> */}
            <Row>
                <Col md={3} className='bg-light'>
                    <ProductListMenu categoryItems ={categoryDataEnabled}/>
                </Col>
                <Col md={9}>
                    <ProductList productItems = {productItemsEnabled}/>
                </Col>
            </Row>
         </PageLayout>
      )
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);