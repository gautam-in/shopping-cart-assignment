import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getProductCategories } from '../redux/Action_creators/ProductCategorys';

const ProductCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const product_categorys = useSelector(state => state.product_category.categories);
    useEffect(() => {
        dispatch(getProductCategories());
        console.log(product_categorys, 'categories');
    }, [])

    const handleNavigate = (id) => {
        navigate({
            pathname: 'products',
            search:createSearchParams({
                filter:id
            }).toString()
        })
    }
    return (
        <div>
            {
                product_categorys.map((item, i) => (
                    <div className='card category-card mt-2 p-25 ' key={item.id}>
                        <div className='row align-items-center'>
                            <>
                                {
                                    ((i + 1) % 2 != 0) ?
                                        <>
                                            <div className='col-4'>
                                                <img src={item.imageUrl} alt={item.name}  className='img' />
                                            </div>
                                            <div className='col-8 text-center'>
                                                <h4><strong>{item.name}</strong></h4>
                                                <p className='desc'>{item.description}</p>
                                                <button className='btn btn-danger' onClick={() => { handleNavigate(item.id) }}>Explore {item.key}</button>
                                            </div>
                                        </> :
                                        <>
                                            <div className='col-8 text-center'>
                                                <h4><strong>{item.name}</strong></h4>
                                                <p className='desc'>{item.description}</p>
                                                <button className='btn btn-danger' onClick={() => { handleNavigate(item.id) }}>Explore {item.key}</button>
                                            </div>
                                            <div className='col-4'>
                                                <img src={item.imageUrl} alt={item.name} height='100%' className='img' />
                                            </div>
                                        </>
                                }

                            </>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCategory