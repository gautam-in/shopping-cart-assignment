import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions'

function mapStateToProps(state) {
    return state
  }
  
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }
 class HomePage extends React.Component {
   componentDidMount(){
     this.props.actions.getBanners()
     this.props.actions.getCategories()
   }
   render(){
        return(
        <Home bannerData={this.props?.banners} unfilteredCategoryData={this.props?.categories} {...this.props} />
    ) }

}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage );
