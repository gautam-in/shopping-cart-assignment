import { Fragment, useState ,useEffect} from 'react'
import './sidebar.css'
import axios  from 'axios'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";
const Sidebar=()=>{
  // const navgite = Navigate()
  const params = useParams()
    const [categories,setCategories]=useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios
          .get("http://localhost:5000/categories")
          .then((res) =>{ 
        
            
            return setCategories(res.data)}
          
          );
      }, []);
   

      const handleCategoryClick=(id)=>{
            if(params.id === id){
                navigate('/products')
            }
            else {
                navigate(`/products/${id}`)
            }
      }
      console.log(params)
    return(
 

       <div className='sidebar'>
            <ul className='sidebarItems'>
              {categories.map((cat,index)=>  <li className='sidebarItem' key={index} onClick={()=>handleCategoryClick(cat.id)}>{cat.name}</li>)}
      
            </ul>
       </div>
     
   
    )
}
export default Sidebar