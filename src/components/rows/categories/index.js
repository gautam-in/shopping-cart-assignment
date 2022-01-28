import React from "react";
import { object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import useCustGetData from "../../atoms/use-custom-getdata";
import Category from "../../molecules/category";

const Categories = ({ history }) => {

    const { loading, data = [] } = useCustGetData('/categories');

    return (
        loading ? <div>Loading...</div>
            : data.length > 0 ?
                <div onClick={(e) => history.push(`/products/${e.target.id}`)}>
                    {
                        data.map((item, index) => <div className='container-bottom-shadow' key={item.id}>
                            <Category item={item} index={index} />
                        </div>
                        )
                    }
                </div>
                : <></>
    )
}

Categories.propTypes = {
    history: object
}

export default withRouter(Categories);