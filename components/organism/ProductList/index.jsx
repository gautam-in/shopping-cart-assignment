import React from 'react';
import ProductListItems from '../../molecules/ProductListItems';
import {Row} from 'reactstrap';

export default class ProductList extends React.Component {
    render(){
        const { productItems} = this.props
        return(
            <Row>
                {productItems &&productItems.map((item, index) =>{
                    return(
                    <ProductListItems item={item} index={index} />
                    )
                })}
            </Row>
        )
    }
}