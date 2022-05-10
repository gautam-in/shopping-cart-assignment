import { Category } from "./homeCategory.styles";
import {Link} from 'react-router-dom';
import './Home.css';
import { useDispatch,useSelector} from "react-redux";
import { setProductsCategory } from '../../Redux/Reducers/ProductSlice';


const HomeCategory=({category,index})=>{
  const dispatch = useDispatch();
return(
<>
<Category index={index}>
<div>
<img  style={{width:"60%",margin:"26px"}}
src={category.imageUrl}
/>
</div>
<div
style={{
    display: "flex",
    flex: 1,
    flexDirection: "column",
    flexWrap:"wrap",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
}}
>
  <div style={{
    display:"flex",
    flexWrap:"wrap"
  }}>
  <h1>{category.name}</h1>
<p>{category.description}</p>
  </div>

 <Link to="/products"> 
          <button className="exploreButton"
            onClick={() => {
               dispatch(setProductsCategory(category.id));
            }}
          >{`Explore ${category.key}`}</button>
        </Link>
</div>
</Category>
</>
)

}

export default HomeCategory;