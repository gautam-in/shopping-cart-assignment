import { Button } from "@material-ui/core";
import * as actionTypes from '../../../store/actions'
import { connect } from "react-redux";
import ProductStyles from "./index.style";
import Image from "../../atoms/image/index";

function Product(props) {

    return (
        <ProductStyles>
            <h2>{props.product.name}</h2>
            <Image src={props.product.imageURL} alt={props.product.name} title={props.product.name} />
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
        onAddItem: (item) => dispatch({ type: actionTypes.ADD_ITEM, item: item })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
