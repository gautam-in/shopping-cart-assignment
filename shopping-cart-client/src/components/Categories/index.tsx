import  { useEffect, useState } from "react";
import axios from "axios";

export interface Category {
      name: string,
      key: string,
      description: string,
      enabled: boolean,
      order: number,
      imageUrl: string,
      id: string
    }
    

const Categories = () => { 

    const [categories, setCategories] = useState<Category[]>([])

    const getCategories = () =>{
      axios.get('http://localhost:5000/categories')
      .then(res=>{
        setCategories(res.data)
      })
    }

    useEffect(()=>{
      getCategories()
    }, [])


    return (<div className="mx-lg-5 mx-md-0 px-md-5 px-2 d-flex flex-column ">
        {categories.map((category, index)=>{
            const {name, key, description, enabled, order, imageUrl, id } = category;
            const idOrderEven = order%2
            return <div key={id} className={`px-md-5 d-flex justify-content-between flex-row${idOrderEven&&'-reverse'} py-3 mt-md-5 order-${order} effect1`}>
                <div style={{textAlign: 'center'}}>
                  <h3 className="font-weight-bold">{name}</h3>
                  <p>{description}</p>
                  <button className="banner-button">{`Explore ${key}`}</button>
                </div>
                <div className="catergory-image-container">
                  <img className="category-image" src={imageUrl}/>
                </div>
            </div>
        })}
    </div>)
}

export default Categories;