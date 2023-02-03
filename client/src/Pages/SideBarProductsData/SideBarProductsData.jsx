
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {getCategories, getProducts} from '../../redux/actionCreators/actionCreators';
import Dropdown from "../../Components/Dropdown/Dropdown";
import './SideBarProductsData.scss';
import Product from "../../Components/Product/Product";

const SideBarProductsData = () => {
    const dispatch = useDispatch();
    const [category,setCategory] = useState('');

    const handleClick = (id) => setCategory(id);

    const data = useSelector(state => state.data);
    useEffect(()=>{
        if(data?.products?.status !== 'success')
        dispatch(getProducts());

        if(data?.categories?.status !== 'success'){
            dispatch(getCategories());
        }
      },[dispatch]);

    return (
        <>
        <Dropdown value={category} onChange={(val)=>handleClick(val)}/>

        <div className="productPageContainer">
            <div className="productPageSidebar">
                <ul className="sideBar">
                    <li className="sideBarItem"onClick={()=>handleClick('')} >All</li>
                    {data.categories.data && data.categories.data.map(cat => (
                      
                        <li className="sideBarItem" onClick={()=>handleClick(cat.id)} key={cat.key}>
                        {cat.name}
                        </li>
                        
                    ))}

                </ul>
            </div>

            <div className="productPageProductsContainer">
                    <Product category={category}/>
            </div>
        </div>

        </>
    );
}

export default SideBarProductsData;