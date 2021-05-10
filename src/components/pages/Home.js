import React,{useState} from 'react';
import CategoryCard from '../molecules/CategoryCard';
import { useDispatch, useSelector } from "react-redux";

import {getCategories} from '../../actions/actionCreators';
const Home = ()=>{
  const categoriesList = useSelector(state => state.categoriesLis);

    //const [categories,setCategories] = useState([]);
   
    const dispatch = useDispatch();
    React.useEffect(()=>{
      dispatch(getCategories());
    },[])
    return (<>
    
            <div className="categoryContainer">
            {categoriesList.categories?.map(a=>{return <CategoryCard key={a.key} categoryName={a.name} imgUrl={a.imageUrl} desc={a.description}/>})}
            </div>
        </>)
}



export default Home;
