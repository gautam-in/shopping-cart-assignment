import React from 'react';
// import {Slide as Menu} from "react-burger-menu "
import './sidebar.styles.scss';
function Sidebar({categories,filterProducts}) {
 
  return (
      <div  className='sidebar'>
      {
          categories.map(({name,id,order,key})=>{
              
   return(<div id ={key}
       onClick={e=>filterProducts(id)}     
    className='sidebar-item' 
    name={name}
     key={name} >
    {name}
    </div>)   
          })
      }
  </div>)
}
export default Sidebar;
