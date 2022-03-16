import React from "react";
import './Productcontainer.styles.scss';
import EachProduct from "../EachProduct/EachProduct";

class ProductContainer extends React.Component{
    render(){
        const {filteredList} = this.props;
        return(
            <div className="product_list_holder flex">
             <EachProduct filteredList={filteredList}/>
            </div>
        )
    }
}

export default ProductContainer;