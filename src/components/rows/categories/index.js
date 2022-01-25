import React from "react";
import useCustGetData from "../../atoms/use-custom-getdata";
import Category from "../../molecules/category";

import './categories.scss';

const Categories = () => {

    const {loading, data} = useCustGetData('/categories');

    return (
        loading ? <div>Loading...</div>
        : <div>
            {
                data.map((item, index) => <div className='container-bottom-shadow' key={item.id}>
                        <Category item={item} index={index} />
                    </div>
                )
            }
        </div>
    )
}

export default Categories;