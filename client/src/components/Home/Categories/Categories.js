import axios from "axios"
import { useEffect, useState } from "react"
import { withRouter } from "react-router";
import Category from "./Category/Category";
import "./categories.scss"


const Categories =(props)=>{
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/categories").then((response) => {
          const result = [];
          const indexArray = [];
    
          for (const key in response.data) {
            if (response.data[key].enabled) {
              indexArray.push(response.data[key].order);
            }
          }
          for (const key in indexArray) {
            for (const newKey in response.data) {
              if (response.data[newKey].order === indexArray[key])
                result[indexArray[key] - 1] = response.data[newKey];
            }
          }
    
          setCategories(result);
        });
      }, []);

    const setPath = (categoryId) => {
        props.history.push("/products/" + categoryId);
      };
    
      return (
        <div className="categories">
          
          {categories.map((category, index) => {
            return (
              <Category
                key={category.id}
                name={category.name}
                btnName={category.key}
                description={category.description}
                imageUrl={category.imageUrl}
                order={category.order}
                setPath={() => setPath(category.id)}
              />
            );
          })}
          
        </div>
      );
    };
    
    export default withRouter(Categories);