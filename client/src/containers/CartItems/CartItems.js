import { Fragment } from "react";
import PropTypes from 'prop-types';
import CartItem from "../../components/CartItem/CartItem";

const CartItems = ({data,...rest}) => {
    return (
        <Fragment>
         <div>
                {data.map((val,i) => (
                    <Fragment key={i}>
                        <CartItem data={val} key={i} {...rest}/>
                    </Fragment>
                ))}
          </div>
        </Fragment>
    )
}

CartItems.propTypes = {
    data: PropTypes.array,
    rest: PropTypes.object
}

CartItems.defaultProps = {
    data: [],
    rest: {}
}

export default CartItems;