import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Caraousel from "../../components/Caraousel/Caraousel";
import Card from "../../components/Card/Card";
import { getOffersAPI, getCategoriesAPI } from "./api";
import {setOffers} from "../../redux/offerSlice"
import {setCategories} from "../../redux/productSlice";
import { Category, GlobalReducerInterface } from "../../redux/interface";

const Home:React.FC<{}>=({})=> {
  const offerArr = useSelector((state:GlobalReducerInterface) => state.offer.offers);
  const categories = useSelector((state:GlobalReducerInterface) => state.products.categories);
  const dispatch:Function=useDispatch();

  const fetchOfferList=async()=>{
    const offerList=await getOffersAPI();
    dispatch(setOffers(offerList));
  }

  const fetchCategories=async()=>{
    const categoriesList=await getCategoriesAPI();
    dispatch(setCategories(categoriesList));
  }

  useEffect(()=>{
    fetchOfferList();
    fetchCategories();
  },[])

  return (
    <div className="bg-white py-2">
      {offerArr.length?<Caraousel banners={offerArr} />:null}
      {categories.map((category:Category, i:number) => (
        <Card cardObj={category} key={category.key} i={i} />
      ))}
    </div>
  );
}

export default Home;
