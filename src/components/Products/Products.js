import React, {useState, useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import './products.css';
import AllProducts from '../../server/products/index.get.json';
import Categories from '../../server/categories/index.get.json';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/shopping/shopping-actions';

function Products() {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    //const [active, setActive] = useState(false);
    const obj = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        //console.log('useEffect');
        let tempproducts = AllProducts;
        if(obj.id !== undefined) {
            let temp = tempproducts.filter(each => each.category === obj.id);
            setProducts(temp);
        }
        else {
            setProducts(AllProducts);
        }
    }, [obj.id]) 

    const dropdownHandler = (e) => {
        //console.log(e.target.value);
        history.push(`/products/${e.target.value}`)
    }

    return (
        <div className='products-page'>
            <div className='sidebar'>
                {Categories.map(category => <li key={category.id} onClick={()=>{history.push(`/products/${category.id}`);}} className="category-list">{category.name}</li>)}
            </div>
            <select onChange={dropdownHandler} className='category-dropdown'>
                <option selected disabled>-- Select Category --</option>
                {Categories.map(category => <option key={category.id} value={category.id}>{category.name}</option> )}
            </select>
            <div className='product-details'>
                {products.map(each => <div key={each.id} className='product-container'>
                    <div style={{fontWeight:'bold',marginBottom:'3px',fontSize:'15px',minHeight:'40px'}}>{each.name}</div>
                    <div className='img-desc-container-mobile'>
                        <div className='img-container-mobile'>
                            <img src={each.imageURL} width='120' height='140' alt={each.name}/>
                        </div>
                        <div className='prod-description-mobile'>
                            {each.description}
                        </div>
                    </div>

                    <div className='img-container'>
                        <img src={each.imageURL} width='250' height='250' alt={each.name}/>
                    </div>
                    <div className='prod-description'>
                        {each.description}
                    </div>
                    
                    <div className='price-container'>
                        <div>
                            MRP Rs. {each.price}
                        </div>
                        <button onClick={()=>dispatch(addToCart({id:each.id,price:each.price,name:each.name,imageURL:each.imageURL}))} className='cart-button'>Buy Now</button>
                    </div>

                    <button onClick={()=>dispatch(addToCart({id:each.id,price:each.price,name:each.name,imageURL:each.imageURL}))} className='price-container-mobile'>Buy Now @ Rs. {each.price}</button>
                </div> )}
                
                
            </div>
        </div>
    )
}

export default Products
