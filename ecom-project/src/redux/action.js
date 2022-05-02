import { getAllProduct,categorydata,addData,removeData,updateData} from "./action-constants"
import {productData} from "./../mockdata/productData";
import {categoryData} from "./../mockdata/categoryData";

export const getAllproduct=()=>{
    let list=productData.map((list)=>list={...list,count:1})
    return{
        type:getAllProduct,
        payload:list
    }
}
export const allCategoryData=()=>{
    return{
        type:categorydata,
        payload:categoryData
    }
}
export const addProduct=(data)=>{
    return{
        type:addData,
        payload:data
    }
}
export const increseProduct=(data)=>{
    return{
        type:updateData,
        payload:data
    }
}
export const decreaseProduct=(data)=>{
    return{
        type:removeData,
        payload:data
    }
}

