import React, { useState, useEffect, useContext } from 'react'
import MyContext from '../../context/myContext';
import { useParams } from 'react-router';
import Breadcrumb from './breadcrumb';

export default function Product() {
    const { id: productId } = useParams();
    const [currentCategoryInfo, setCurrentCategoryInfo] = useState({});
    const [currentProductInfo, setCurrentProductInfo] = useState({});

    const { context: { categories = [], products = [] } } = useContext(MyContext)

    useEffect(() => {

        if (products.length > 0) {
            let product = products.find(item => item.id === productId);

            if (product) {
                setCurrentProductInfo(product);
            }
        }
    }, [products, productId]);

    useEffect(() => {
        if (Object.keys(currentProductInfo).length > 0) {
            let categoryId = currentProductInfo.category;

            let category = categories.find(item => item.id === categoryId);

            if (category) {
                setCurrentCategoryInfo(category);
            }
        }

    }, [categories,currentProductInfo])


    return (
        <section className="ProductPage">
            <Breadcrumb
                product={currentProductInfo}
                category={currentCategoryInfo}
            />
            <div className="Productpage_Container">

                <div className="Thumbnail_Container">
                    <img className="drift-demo-trigger"
                        src={currentProductInfo.imageURL} />
                </div>


                <div className="Details_Container">
                    <h1>{currentProductInfo.name}</h1>
                    <p className="price">{`₹${currentProductInfo.price}`}</p>
                    <p className="description">{currentProductInfo.description}</p>

                    <div className="Button_Container">

                        <button className="Button_Action Button_Action--WishList ">
                            ADD TO WISHLIST
                        </button>


                        <button className="Button_Action Button_Action--AddToCart">
                            ADD TO BAG
                        </button>
                    </div>

                    <div>

                        <p className="small-text"><span>Standard delivery</span> 2-5 working days</p>
                        <p className="small-text"><span>Next day delivery</span> order before 2pm</p>
                    </div>
                </div>


            </div>

        </section >
    )
}
