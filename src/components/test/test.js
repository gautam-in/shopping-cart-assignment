import React from 'react'
import {Link} from 'react-router-dom'
import './test.css'
import {MenuItems} from './MenuItems'
function Test(){
    return(
        <nav className="Navbar-Items">
            <h1 className="Navbar-Logo">Dell Technologies</h1>
            <div className="menu-icon"></div>
            <ul className="nav-menu">
                {MenuItems.map((item,index)=>{
                    return <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                        </Link>
                            </li>
                })}
            </ul>
        </nav>
    )
}

export default Test