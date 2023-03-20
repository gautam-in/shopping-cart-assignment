import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentCategory } from '../../store/categories/categoriesSlice';
import './categoryItem.scss'
const CategoryItem = ({data,index}) => {
    const {name,description,key,order,imageUrl,id}=data;
    
   const navigate=useNavigate();
   const dispatch=useDispatch();
    const container=index%2===0 ? 'container' :'reverse__container';
   const categoryNavigation=()=>{
    console.log(data);
    dispatch(setCurrentCategory(data.id));
    navigate(`/products/${id}`)
   }
  return (
    <section className={container}>
        <div className='image__container'>
            <img src={imageUrl} alt={name} className=' image-wrapper' />
        </div>
        <div className='container__content'>
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={categoryNavigation}>Explore {key}</button>
        </div>
    </section>
  )
}

export default CategoryItem