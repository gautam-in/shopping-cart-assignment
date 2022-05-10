import './SideBar.css';
import { fetchProducts, setProductsCategory } from '../../Redux/Reducers/ProductSlice';
import { useDispatch,useSelector} from "react-redux";
import {Link} from 'react-router-dom';


const PRODUCT_ID_MAP = {
    "Fruits & Vegetables": "5b6899953d1a866534f516e2",
    "Bakery Cakes and Dairy": "5b6899123d1a866534f516de",
    "Beverages": "5b675e5e5936635728f9fc30",
    "Beauty and Hygine": "5b68994e3d1a866534f516df",
    "Baby Care": "5b6899683d1a866534f516e0",
  };
  
const SideBar=()=>{
  const dispatch = useDispatch();
  const data =useSelector((state) => state.product.value);   
  return(
      <>
      <div className="productSidebar">
{Object.keys(PRODUCT_ID_MAP).map(item=>
    (
    
 <button 
 
onClick={() => {
  dispatch(setProductsCategory(PRODUCT_ID_MAP[item]));
  dispatch(fetchProducts())
}}
style={{
    padding: "16px",
    textAlign: "left",
    fontSize: 12,
    border: "none",
    color:
    data === PRODUCT_ID_MAP[item]
         ? "#fff"
         : "rgb(133, 133, 133)",
    backgroundColor:
    data === PRODUCT_ID_MAP[item]
       ? "#d00256"
        : "",
    borderBottom: "1px solid rgb(212, 212, 212)",
    fontFamily: 'Dosis',
    fontWeight: 600,
    
  }}>
    {item}
</button>

    
))}
</div>
      </>
  )  

}

export default SideBar;