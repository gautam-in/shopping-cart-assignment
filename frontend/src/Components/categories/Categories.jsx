import React, { useEffect, useMemo } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentCategory} from '../../store/categories/categoriesSlice'
import CategoryItem from './CategoryItem';


const Categories = () => {
    const dispatch=useDispatch();
  
    const{isLoading,data,error}= useSelector((state)=>state.category.categories)
    useEffect(()=>{
        dispatch(setCurrentCategory())
    },[]);

    const filterData=data.filter(item=>item.order>0).sort((a,b)=>a.order-b.order);
 
    // const categoryItemData=useMemo(() => {
    //     return data.sort((a, b) => a.order - b.order).filter((item) => item.order >=0);
    //   }, [data]);
    // console.log(data,isLoading);
  return (
    <div style={{'marginTop':'30px'}}>
        {
            filterData.map((categoryItem)=>{
                return  <CategoryItem key={categoryItem.id} data={categoryItem} index={categoryItem.order}/>
            })
        }
    </div>
  )
}

export default Categories