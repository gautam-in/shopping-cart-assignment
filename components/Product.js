import { Button } from "@material-ui/core";
import ProductStyles from "../styles/product";
import * as actionTypes from '../store/actions'
import { connect } from "react-redux";

function Product( props) {
    
    return (
        <ProductStyles>
            <h3>{props.product.name}</h3>
            <img src={props.product.imageURL} alt={props.product.name} title={props.product.name}/>
            <div className="product-description">
                {props.product.description}
            </div>
            <div className="product-price">
                <span> <strong>MRP RS.</strong>{props.product.price}</span>
            <Button onClick={() => props.onAddItem(props.product)} size="small" variant="contained" color="secondary">Buy Now</Button>
            </div>
        </ProductStyles>
    )
}
const mapStateToProps = state => {
    return { total: state.totalItems }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (item) =>  dispatch({ type: actionTypes.ADD_ITEM, item: item })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
