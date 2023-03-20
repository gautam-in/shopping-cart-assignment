import React, { useEffect, useState } from 'react'
import Carousal from '../../Components/carousal/Carousal';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentCategory,fetchCategoriesData} from '../../store/categories/categoriesSlice';
import { store } from '../../store/store';
import Categories from '../../Components/categories/Categories';
import './Home.scss'

 const Home = () => {
  const [open,setOpen]=useState(false);
  const dispatch=useDispatch();
  const{isLoading,data,error,currentCategory}=useSelector((state)=>state.category.categories);
  useEffect(()=>{
    dispatch(setCurrentCategory());
    dispatch(fetchCategoriesData())
  },[])
  // console.log(store.getState(),isLoading,data,error);
  return (
    <main className='main-container'>
      <Carousal/>
      <Categories/>
    </main>
  )
}

export default Home