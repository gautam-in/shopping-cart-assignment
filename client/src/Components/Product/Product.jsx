
import {useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { cartActions } from '../../redux/actionMethod/cartSlice';
import './Product.scss';

const Product = ({category}) => {
    const {categoryId} = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.data.products);


    let finalProductList;
    if(category !== ''){
        finalProductList = products.data.filter(prod => prod.category === category);
    } else if(categoryId){
        finalProductList = products.data.filter(prod => prod.category === categoryId);
    }
    else finalProductList = products.data;

    const addtoCart = (item) => dispatch(cartActions.addtoCart(item));

    return(
        <>
         {finalProductList && finalProductList.map(prod => (
            <div className="productContainer" key={prod.id}>
            <div className="productHeaderContainer">
                <h4 className="productHeader">
                        {prod.name}
                </h4>
            </div>

            <div classname="productMetaDataContainer">
                <div className="productImgContainer">
                        <img className="productImg" src={prod.imageURL}/>
                </div>

                <div className="productDescContainer">
                        <p classname="productDesc">
                            {prod.description}
                        </p>
                </div>

                <div className="productMetaContainer">
                    <div className="productPrice">
                        MRP Rs.{prod.price}
                    </div>

                    <button className="productCTA" onClick={()=>addtoCart(prod)}>
                            Buy Now
                            <span className="productMobilePrice">@ Rs {prod.price}</span>
                    </button>
                </div>
            </div>


        </div>)) }
        </>
    )
}

export default Product;