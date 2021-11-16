import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as categoryAction from '../store/actions/categoryAction';
import './Categories.css';

const Categories = () => {

    const categories = useSelector(state => state.Category.categories);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(categoryAction.loadCategories());
    },[]);

    const handleChooseCategory = (id,categoryName) => {
        dispatch(categoryAction.chooseCategory(id,categoryName));
        history.push({
            pathname:'/products',
            state:{loadCategoryProduct:true}
        });
    }

    return(
        
        <div className="Container">
            {categories.map((category)=>{
               return (
               <div key={category.id} className="Categories-Container">
                    <div>
                        <img src={process.env.PUBLIC_URL + `${category.imageUrl}`} alt={category.name} style={{maxWidth:'100%',height:'auto'}}/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'3%'}}>
                        <h1>{category.name}</h1>
                        <p>{category.description}</p>
                        <button onClick={()=>handleChooseCategory(category.id,category.name)} style={{backgroundColor:'#d40851',border:'none',color:'white',cursor:'pointer'}}>{`Explore ${category.key}`}</button>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Categories;