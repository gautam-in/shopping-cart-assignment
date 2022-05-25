import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './productCard.css'
import { addToCart } from '../../pages/products/productsSlice'
function ProductCard() {
    const products = useSelector(state => state.productsReducer.productsList);
    const filteredProducts = useSelector(state => state.productsReducer.filteredProducts);

    const dispatch = useDispatch()
    const addProductToCart = (product) => {
        dispatch(addToCart({ product }))
    }
    let productsList = filteredProducts.length > 0 ? filteredProducts : products
    return (
        <>
            <div className='ProductCard_container'>
                {productsList.map((product, index) => {
                    return (
                        <div className='productCard_block' key={product.id}>
                            <h3 className='product_name'>{product.name}</h3>
                            <div className='product_section'>
                                <div className='product_img_block'>
                                    <img className="product_image" src={product.imageURL} alt={product.description} />
                                </div>
                                <div className='product_desc_section'>
                                    <div className='productCard_desc_block'>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='price_container'>
                                        <p className='price_tag_lg hide_tab hide_mobile'>MRP Rs.{product.price}</p>
                                        <button className="buy_now" onClick={() => addProductToCart(product)}>Buy Now <span className='price_tag_md show_tab show_mobile'>@ Rs.{product.price}</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    );
}

export default ProductCard;
