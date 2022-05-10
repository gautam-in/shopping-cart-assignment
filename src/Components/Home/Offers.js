import "./Home.css"
import { useEffect, useState } from 'react';
import { useDispatch,useSelector} from "react-redux";
import { fetchOffers } from '../../Redux/Reducers/OfferSlice';
import HomeCategory from "./HomeCategory";

const Offers =()=>{
    const dispatch = useDispatch();
    const data =useSelector((state) => state.offer.value); 
  
    const sortedCategories = data
    .filter((item) => item.imageUrl)
    .sort((a, b) => a.order - b.order);
  
    useEffect(() => {
      dispatch(fetchOffers());
      return
    }, []);
    

    return(
        <>
        <div >
        {sortedCategories.map((category, index) => (
        <HomeCategory category={category} key={category.id} index={index} />
      ))}
      </div>
        </>
    )
}

export default Offers;