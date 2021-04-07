import { Button } from "@material-ui/core"
import { connect } from "react-redux"
import Image from "../../atoms/image"
import * as actionTypes from '../../../store/actions'

function CartItem(props) {
    console.log('props', props)
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr' }}>
            <div>
                <Image src={props.item.imageURL} style={{ width: '80px', height: '80px', padding: '1rem' }} />
            </div>
            <div style={{}}>
                <p style={{ fontWeight: 700, fontFamily: 'sans-serif' }}>{props.item.name}</p>
                <div style={{ display: 'flow-root' }}>
                    <Button style={{ minWidth: '30px' }} onClick={() => { props.onDecrementItem(props.item) }} className="buttonW" size="small" variant="contained" color="secondary">-</Button>
                    <span style={{ padding: '1em' }}>{props.item.quantity}</span>
                    <Button style={{ minWidth: '30px' }} onClick={() => { props.onIncrementItem(props.item) }} className="buttonW" size="small" variant="contained" color="secondary">+</Button>
                    <span style={{ padding: '1em' }}>  &#10006; </span>
                    <span style={{ padding: '1em' }}>{props.item.price}</span>
                </div>
            </div>
            <div style={{ margin: 'auto' }}>RS. {(props.item.price) * (props.item.quantity)}</div>
        </div>
    )
}
const mapStateToProps = state => {
    return { cartitems: state.cartItems }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementItem: (item) => dispatch({ type: actionTypes.INCREMENT, item: item }),
        onDecrementItem: (item) => dispatch({ type: actionTypes.DECREMENT, item: item })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)