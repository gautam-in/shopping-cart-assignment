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

// Redux State Configutration
const mapStateToProps = state => {
   return {
    productItems: state.product.items,
   }
}

// Redux Dispatch Configutration
const mapDispatchToProps = {
   fetchProduct: fetchProduct,
};

class ProductListPage extends React.Component {
   componentDidMount() {
      this.props.fetchProduct();
   }

   render() {
      //data from api and reducer
      const { productItems} = this.props
      const productItemsEnabled = productItems
         .filter((a) => a?.isActive)
         .sort((a, b) => a.order - b.order);

      return (
         <PageLayout>
            {/* <Banner bannerItems={bannerItemsEnabled} /> */}
            <Row>
                <Col md={3} className='bg-light'>
                    <ProductListMenu productItems = {productItems}/>
                </Col>
                <Col md={9}>
                    <ProductList productItems = {productItems}/>
                </Col>
            </Row>
         </PageLayout>
      )
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);