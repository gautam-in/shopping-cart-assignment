import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[

                {
                    title:"Fruits and vegitable",
                    subtitle:"Varienty of fresh fruits and vegitable",
                    imageUrl:"../static/images/category/fruits.png",
                    id:1,
                    linkUrl:"fruitsandvegitables"
                },
                {
                title:"Bakery, Cakes and Diary",
                subtitle:"best cupcakes ,cookies,cheesecake,freshbread,cofee,milk and more..",
                imageUrl:"../static/images/category/bakery.png",
                id:2,
                linkUrl:""
            },
            
            {
                title:"Beverages",
                subtitle:"fresh fruit juices, soda,beer and more",
                imageUrl:"../static/images/category/beverages.png",
                id:3,
                linkUrl:""
            },
            {
                title:"Baby care",
                subtitle:"Buy baby bath, skin products",
                imageUrl:"../static/images/category/baby.png",
                id:4,
                linkUrl:""
            },
            {
                title:"Beauty and Hygine",
                subtitle:"Beauty and personal care producst at best price",
                imageUrl:"../static/images/category/beauty.png",
                id:5,
                linkUrl:""
            }
        
        ]
        }
    }



    render(){
        return(
            <div className='directory-menu'>
               {this.state.sections.map(({id,...otherProps})=>(
                   <MenuItem  key={id} imagePosition={id % 2 === 0 ?"left" :"right"} {...otherProps} />
               ))} 
              
            </div>
        )
    }
}

export default Directory;