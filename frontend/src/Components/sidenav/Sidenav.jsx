import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesData, setCurrentCategory } from '../../store/categories/categoriesSlice';
import { useNavigate } from 'react-router-dom';
import './sidenav.scss'
const Sidenav = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const currentCategory=useSelector(state=>state.category.categories)
    useEffect(()=>{
        dispatch(fetchCategoriesData())
    },[]);

    const categorySelectorHandler=(event,id)=>{
      dispatch(setCurrentCategory(event.target.name));
      navigate(`/products/${id}`)
    }



 const category=  useSelector(state=>state.category.categories.data);
 const categoryFilterData=category.filter((category=>category.order>0));
  return (
    <aside className='sidenav__container'>
       <nav>
         <ul>
            {categoryFilterData.map((category)=>{
             return  <li key={category.name}>             
                  <button className='sidenav__button' onClick={(event)=>categorySelectorHandler(event,category.id)} name={category.name} >
                  {/* onClick={alert(category.name)} */}
                  {category.name}
                  </button>
                </li>
            })}
         </ul>
        </nav>   
    </aside>
  )
} 

export default Sidenav