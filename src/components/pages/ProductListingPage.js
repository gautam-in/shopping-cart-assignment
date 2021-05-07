import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCategories,getProducts} from '../../actions/actionCreators';
import ProductCard from '../../components/molecules/ProductCard';
const ProductListingPage = () =>{
    const categoriesList = useSelector(state => state.categoriesLis);
    const productsList = useSelector(state => state.products.productsList)

    //const [categories,setCategories] = useState([]);
    const dispatch = useDispatch();
    React.useEffect(()=>{
      dispatch(getCategories());
      dispatch(getProducts());

    },[])

    const categoriesDropdown = categoriesList.categories?.map((category) => {
        const {id, name} = category;
        return (
          <li key={id} data-testid="select-option" value={id}>
            {name}
          </li>
        );
      });

      const productsContent = productsList?.map((item,i) =>{
            return <ProductCard product={item} key={i}/>
      }) 
    return (<>
      
        <ul>
            {categoriesDropdown}
            </ul>
            <div className="categoryContainer">
            {productsContent}</div>
    </>)
}

export default ProductListingPage;