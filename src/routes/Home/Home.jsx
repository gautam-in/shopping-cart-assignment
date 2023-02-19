import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Caraousel from "../../components/Caraousel/Caraousel";
import Card from "../../components/Card/Card";
import { getOffersAPI, getCategoriesAPI } from "./api";
import {setOffers} from "../../redux/offerSlice"
import {setCategories} from "../../redux/productSlice";

function Home({}) {
  const offerArr = useSelector((state) => state.offer.offers);
  const categories = useSelector((state) => state.products.categories);
  const dispatch=useDispatch();

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
      {categories.map((category, i) => (
        <Card cardObj={category} key={category.key} i={i} />
      ))}
    </div>
  );
}

export default Home;
