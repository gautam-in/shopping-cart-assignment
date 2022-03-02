import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import classes from './CategoryCard.module.css'
import Button from '../button/Button'


const CategoryCard = () => {

    const history = useHistory();
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios
        .get("http://localhost:4000/categories")
        .then((response)=>{
            setCategories(response.data.sort((first, second) => first.order - second.order))
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    console.log(categories)
 
    return (
        <div className={classes.category_section}>
            {
                categories.map((category)=> {
                    return (

                        category.enabled ? (
                            <div className={classes.category} key={category.key}>
                                    <div className={classes.category_image}>
                                        <img src={category.imageUrl} alt={category.name} />
                                    </div>

                                    <div className={classes.category_container}>
                                        <h2>{category.name}</h2>
                                        <p>{category.description}</p>
                                            <button className={classes.button}
                                                onClick={() => history.push(`/Products?product=${category.id}`)}
                                            >
                                                
                                                {category.name}
                                            </button>
                                    </div>
                            </div>
                            ): null
                    )
                }
                )
            }

        </div>
    )
}

export default CategoryCard