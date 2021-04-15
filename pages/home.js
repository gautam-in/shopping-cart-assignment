import React from 'react'
import Home from '../components/templates/home/Home'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../reducer/actions'

export function mapStateToProps(state) {
    return {
      homeReducer:state.homeReducer
    }
  }
  
export function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(ActionCreators, dispatch)}
  }

 class HomePage extends React.Component {
   componentDidMount(){
     this.props.actions.getBanners()
     this.props.actions.getCategories()
   }
   render(){
     const {homeReducer} = this.props
        return(
        <Home bannerData={homeReducer.banners} unfilteredCategoryData={homeReducer.categories} {...this.props} />
    ) }

}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage );
