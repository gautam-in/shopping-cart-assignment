import React from 'react';
import '../styles/sideNav.scss';
 const SideNav = ({categories}) => {
  return(
    <>
    <nav className='side-nav'>
        <ul>
            {categories && categories.map((item) => {
                return <li key={item.id}><p>{item.name}</p></li>
            })}
        </ul>
    </nav>
    </>
  )
 }

 export default SideNav;
