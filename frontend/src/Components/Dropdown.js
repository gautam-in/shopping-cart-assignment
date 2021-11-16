import React,{useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import * as categoryAction from '../store/actions/categoryAction';
import "./Dropdown.css";

const Dropdown = () => {

    const [active,setActive] = useState(false);
    const categories = useSelector(state => state.Category.categories);
    const selectedCategory = useSelector(state => state.Category.category);
    const dispatch = useDispatch();

    const handleChooseCategory = (id,categoryName) => {
        setActive(false);
        dispatch(categoryAction.chooseCategory(id,categoryName));
    }

    return(
        <div>
            <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'#d40851'}} onClick={()=>{setActive(!active)}}>
                <div style={{alignSelf:'center',color:'white',paddingLeft:'5%'}}>
                    {selectedCategory}
                </div>
                <div style={{alignSelf:'center',paddingRight:'5%',color:'white'}} onClick={()=>setActive(!active)}>{active?<span>&#x21e7;</span>:<span>&#x21e9;</span>}</div>
            </div>
            { active && <div style={{display:'flex',flexDirection:'column',paddingLeft:'5%'}}>{categories.map((category)=>{return <span key={category.id} onClick={()=>handleChooseCategory(category.id,category.name)}>{category.name}</span>})}</div>}
        </div>
    )
}

export default Dropdown;