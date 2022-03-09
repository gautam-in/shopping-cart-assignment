import React from 'react'

import classes from './Menubar.module.css'


const Menubar = ({categories, handleclick, className}) =>{
    return (
        <aside className={`${className} ${classes.menubar}`}> 
            {
                categories.map((category)=>{
                    if(category.imageUrl !== undefined){
                        return(
                            <button className={classes.menubar__button} onClick={()=> handleclick(category.id)}>
                                {category.name}
                            </button>
                        )
                    }
                })
            }
        </aside>
    )


}

export default Menubar