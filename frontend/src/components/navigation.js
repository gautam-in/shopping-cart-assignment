import React from 'react';
import {Link } from 'react-router-dom';

const Navigation = ({links})=>{
let navigationLinks = null;
   if(links){
       navigationLinks = links.map((link)=>{
           return(
               <Link to={link.href}>{link.name}</Link>
           )
       })
   }

   return (
       <nav>
        {navigationLinks}
       </nav>
   )
}
export default Navigation;