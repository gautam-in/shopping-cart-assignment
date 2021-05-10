import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCategories,getProducts} from '../../actions/actionCreators';
import ProductCard from '../../components/molecules/ProductCard';
const ProductListingPage = () =>{
    const categoriesList = useSelector(state => state.categoriesLis);
    const productsList = useSelector(state => state.products.productsList)
    const [selectedCategory,setSelectedCategory] = useState('');
    const [showDropdown,setShowDropdown] = useState(false);
    const [displayList,setDisplayList] = useState([]);
    const dispatch = useDispatch();
    React.useEffect(()=>{
      dispatch(getCategories());
      dispatch(getProducts());

    },[])
    React.useEffect(() => {
      setDisplayList(productsList);
    }, [productsList]);

    const categoriesDropdown = categoriesList.categories?.map((category) => {
        const {id, name} = category;
        return (
          <li key={id} data-testid="select-option" onClick={()=>onClickHandler(id,name)} value={id}>
            {name}
          </li>
        );
      });

     

      const onClickHandler = (id,name)=>{
        console.log(id);
        console.log(name);
        setSelectedCategory(name);
        setShowDropdown(false);
        filterProductsBasedOnCategory(id);
      }
     
      const filterProductsBasedOnCategory = (id) => {
        setDisplayList(() =>
        productsList.filter((product) => product.category === id)
        );
      };
      
      const productsContent = displayList?.map((item,i) =>{
        return <ProductCard product={item} key={i}/>
  }) 
    return (<>
        <div className="categoriesDropdownHeader"  onClick={()=>setShowDropdown(true)} >{selectedCategory || "Select Category"}</div>
        {showDropdown && <ul className="categoriesDropdown">
            {categoriesDropdown}
            </ul>}
            <div className="categoryContainer">
            {productsContent}</div>
    </>)
}

export default ProductListingPage;