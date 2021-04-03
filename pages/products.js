import React, { Fragment } from 'react'
import Products from '../components/templates/product/Products';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../reducer/actions'

export function mapStateToProps(state) {
    return {
      productReducer:state.productReducer,
      homeReducer:state.homeReducer,
      cartReducer:state.cartReducer,
      userReducer:state.userReducer

    }
  }
  
export function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(ActionCreators, dispatch)}
  }

 class ProductPage extends React.Component {
   componentDidMount(){
     this.props.actions.getProducts()
     this.props.actions.getCategories()
   }
   render(){
     const {homeReducer,productReducer} = this.props
     const availableCategories =  homeReducer.categories.filter((category)=>category.enabled)
        return(
          productReducer?.products?.length? 
        <Products availableCategories={availableCategories} query={this.props.query} {...this.props} />
        :<Fragment />
    ) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage ); 
