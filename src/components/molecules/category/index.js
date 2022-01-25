import React from "react";
import Button from "../../atoms/button";
import Heading from "../../atoms/heading";
import Image from "../../atoms/image";
import Paragraph from "../../atoms/paragraph";

import './category.scss';


const Category = ({item, index}) => {

    const {name, key, description, imageUrl, id} = item;

    const onCategoryItem = e => {
        console.log(e);
    }

    return <div className="category-wrapper" onClick={onCategoryItem}>
        {
            index%2===0 ?
            <div className="image-content">
                <div className="image-wrapper"><Image src={imageUrl} alt={name}/></div>
                <div className="content-wrapper">
                    <Heading heading={name}/>
                    <Paragraph text={description}/>
                    <Button label={`Explore ${key}`} id={id}/>
                </div>
            </div>
            : <div className="content-image">
                <div className="content-wrapper">
                    <Heading heading={name}/>
                    <Paragraph text={description}/>
                    <Button label={`Explore ${key}`} id={id}/>
                </div>
                <div className="image-wrapper"><Image src={imageUrl} alt={name}/></div>
            </div>
        }
    </div>
}

export default Category;