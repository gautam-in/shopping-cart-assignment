import {useParams} from 'react-router-dom';
import { useQuery } from "react-query";
import { getCategories } from "../Services/http";
import { sortAsc } from "../Utils/";
export const useCategory=()=>{
    let {data=[],error,isLoading}=useQuery("getCategories",getCategories);
    let {category}=useParams();
    data=data.filter(item=>item.enabled && item.imageUrl).sort(sortAsc); // only enabled categories and having imageUrl and in accending order
    let catIdSelected=data.find(cat=>cat.key===category)?.id;
    return {catIdSelected,data,error,isLoading}
}