import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/cart/cart.actions';
import './Sidebar.scss';

const Sidebar = ({ catData = [], ...props }) => {
    const dispatch = useDispatch();
    const { categoryId } = useSelector(store => store.cart)

    const changeCategory = (e, _id) => {
        e.stopPropagation()
        dispatch(setCategory(_id))
    }

    return (
        <aside className='product-sidebar'>
            <nav className='product-nav'>
                <ul>
                    {catData.map(category => {
                        return (
                            <li className={(categoryId === category._id) ? 'active' : ""} onClick={(e) => changeCategory(e, category._id)} key={category._id}><button aria-label={"Change Category"} className='change-cat-btn' >{category.name}</button></li>
                        )
                    })}
                </ul>
            </nav>

            <div className="vertical-line"></div>

        </aside>

    );
}


export default Sidebar;
