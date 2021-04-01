import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import {mapDispatchToProps,mapStateToProps} from '../container/container'

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
