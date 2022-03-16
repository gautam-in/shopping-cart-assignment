import React from 'react';
import './sidenav.styles.scss'

class SideNav extends React.Component{
    render(){
        return (
            <div className='sidenav_container desktop_sidenav'>
                {
                    this.props.categories &&  this.props.categories.map((item)=>{
                        return item.enabled ?<p className='sidenav_title' key={item.id} onClick={()=>this.props.onClickofProduct(item)}>{item.name}</p> :null
                    })
                }
                
            </div>
        )
    }
}

export default SideNav;