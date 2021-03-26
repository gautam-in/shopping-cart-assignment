import React from 'react';
import { CategoriesData } from '../../_services/server/categories';
import './style.scss';

export class SideBar extends React.Component {

    render() {
        return (
            <div className='sideBar'>
             <ul className='sideBarList'>
                {CategoriesData.map((item,key) => (
                    <li 
                        key={key} 
                        // id={window.location.pathname = item.link }
                        className='row'
                        onClick={()=>{
                            window.location.pathname = item.link 
                        }}>
                        <div>{item.name}</div>
                    </li>
                ))}
             </ul>
          </div>
        );
    }
}

