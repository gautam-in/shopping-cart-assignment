import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { categoryURL } from '../../Shared/URL'
import { useNavigate  } from 'react-router-dom'
import './Categories.scss'
import Button from '../../Shared/Button'

function Categories() {
    const [categories, setcategories] = useState([])
    
    const navigate=useNavigate();

    const getCategories=()=>{axios.get(categoryURL)
        .then((response)=>{
            setcategories(response.data)}
        )
        .catch(err=>console.log(err))
    }
    useEffect(() => {
        getCategories();
       
    }, [])
    const productsPage = (id)=>{
        navigate("/products", {state:{categoryId:id}})
    }
    return (
        <div className="categories-container">
        {
            categories.map((category)=>{
                return <article className="category-container">
                <div className="category-image">
                <img src={category.imageUrl} alt={category.name}  />
                </div>
                <div className="category-info">
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    <Button onClick={()=>productsPage(category.id)}>Explore {category.name}</Button>
                    {/* <button className="button-style">Explore {category.name}</button> */}
                </div>
                </article>
            })
        }
           
        </div>
    )
}

export default Categories
