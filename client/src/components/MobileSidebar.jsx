import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

const MobileSidebar = () => {
    const categories = useSelector(state => state.product_category.categories);
    const [searchParam, setSearchParam] = useSearchParams()
    return (
        <div className='content'>
            <div className="form-group">
                <select className="form-control mobile-sidebar" id="sel1" onChange={(e) => { setSearchParam({ filter: e.target.value }) }}>
                    {
                        categories.map((item,i)=>(
                            <option key={item.id} value={item.id} >{item.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default MobileSidebar