import React from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.css'

function Sidebar({ }) {
    const categories = useSelector(state => state.products.categories);
    return <div className='sidebar-width bg-gray-200 text-gray-500 font-semibold h-screen'>
        {categories.map((category) => <><div className='p-2 border-bottom'>{ category}</div></>)}
    </div>
}

export default Sidebar