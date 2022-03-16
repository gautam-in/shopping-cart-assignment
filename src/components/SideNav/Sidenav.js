import React from 'react';
import './sidenav.styles.scss';
import {connect} from 'react-redux';

class SideNav extends React.Component{
    state={
        activekey:this.props.category_prods.length ? this.props.category_prods[0].id:null,
    }
    onClickofNavElem=(event,item)=>{
        this.setState({
            activekey:item.id
        })
    }
    render(){
        return (
            <div className='sidenav_container desktop_sidenav'>
                {
                    this.props.categories &&  this.props.categories.map((item)=>{
                        return item.enabled ?<p className={this.state.activekey == item.id ?'sidenav_title active':'sidenav_title'} key={item.id} onClick={(e)=>{this.props.onClickofProduct(item);this.onClickofNavElem(e,item)}}>{item.name}</p> :null
                    })
                }
                
            </div>
        )
    }
}
const mapStateToPros = (state, prop) => {
    return {
    category_prods:state.serverReducer.respected_category_prods
  
  
    }
  }
export default connect(mapStateToPros,null)(SideNav);