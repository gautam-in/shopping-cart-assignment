import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {getCategoriesAction} from "../../actions/actionHome";
import CategoryCard from "../categoryCard";
import Spacer from "../common/spacer";
import "./styles.scss";




const Categories = () => {

	const dispatch = useDispatch()

	const {categoryData} = useSelector((state)=>state.home)

	useEffect(()=>{
		dispatch(getCategoriesAction())
	},[])



	return (
		<Spacer customClass= "space-wrapper" >
		{
			categoryData.map(({id, ...item}, index)=> <CategoryCard key={id} index={index} details = {item} /> )
		}
		</Spacer>
	);
};

export default Categories;